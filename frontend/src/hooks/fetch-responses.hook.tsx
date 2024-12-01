import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { App } from 'antd';
import axios, { AxiosError } from 'axios';
import { AppDispatch } from 'redux/store';
import { getResponses } from '../redux/responses/slice';
import { API_ROUTES } from 'enums';

const { BASE_URL } = process?.env;

export const useResponses = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const app = App.useApp();

  const fetchResponses = async () => {
    if (BASE_URL) 
    try {
      const response = await axios.post(BASE_URL.concat(API_ROUTES.API), { })
      if (response?.data ) dispatch(getResponses(response.data));
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
