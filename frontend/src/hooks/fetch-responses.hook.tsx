import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { App } from 'antd';
import axios, { AxiosError } from 'axios';
import { AppDispatch } from 'redux/store';
import { getResponses } from '../redux/responses/slice';
import { API_ROUTES } from 'enums';
import { qtyValue } from '../redux/qty/selectors';
console.log(process.env.NODE_ENV);

// const { env: { REACT_APP_BASE_URL: BASE_URL } } = require('process');
// const { env: { REACT_APP_BASE_URL: BASE_URL } } = process.env.NODE_ENV;
const BASE_URL = 'f';

export const useResponses = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const qty = useSelector(qtyValue);
  const app = App.useApp();
console.log(qty);

  const fetchResponses = async () => {
    console.log('base', BASE_URL);
    
    if (BASE_URL) 
    try {
  await Promise.all(Array(qty).map(async (_, index) => {

    const response = await axios.post(BASE_URL.concat(API_ROUTES.API), { index })
    console.log('response', response);
    
    if (response?.data ) dispatch(getResponses(response.data));
  }))

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
