import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { App } from 'antd';
import { useAppProps } from 'antd/es/app/context';
import axios, { AxiosError } from 'axios';
import rateLimit from 'axios-rate-limit';

import { AppDispatch } from 'redux/store';
import { getResponses } from '../redux/responses/slice';
import { API_ROUTES } from 'enums';
import { qtyValue } from '../redux/qty/selectors';
import { QtyType } from 'types';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const REQUESTS_QTY = 1000;
const MIN_CONCURENCY = 1;
const MAX_CONCURENCY = 100;
const NEXT_ELEMENT = 1;

export const useResponses = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const qty: QtyType = useSelector(qtyValue);
  const app: useAppProps = App.useApp();

  const fetchResponses = async (): Promise<void> => {
    if (BASE_URL && qty && qty >= MIN_CONCURENCY && qty <= MAX_CONCURENCY)
      try {
        const http = rateLimit(axios.create(), { maxRequests: qty, maxRPS: qty })
        setIsLoading(true);
        const promises = Array.from({ length: REQUESTS_QTY }, (_, i) => i + NEXT_ELEMENT).map(async (index) => {
          let time = new Date().getTime();
          const response = await axios.post(BASE_URL.concat(API_ROUTES.API), { index })

          if (response?.data) dispatch(getResponses({...response.data, time: new Date().getTime() - time}));
        })
        await Promise.all(promises);

      } catch (error) {
        app.message.warning((error as AxiosError).message);
      } finally {
        setIsLoading(false);
      }
  };

  return {
    fetchResponses,
    isLoading,
  };
};
