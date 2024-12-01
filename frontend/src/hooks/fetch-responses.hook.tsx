import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { App } from 'antd';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from 'constants/constants';
import { checkNextPage, getFilteredIssues } from 'helpers';
import { AppDispatch } from 'redux/store';
import { IssueType } from 'types';
import { changesValue } from '../redux/changes/selectors';
import { doneIssuesValue } from '../redux/doneIssues/selectors';
import { getDoneIssues, nextPageDoneIssues } from '../redux/doneIssues/slice';
import { inProgressIssuesValue } from '../redux/inProgressIssues/selectors';
import { getInProgressIssues, nextPageInProgressIssues } from '../redux/inProgressIssues/slice';
import { repoValue } from '../redux/repo/selectors';
import { toDoIssuesValue } from '../redux/toDoIssues/selectors';
import { getToDoIssues, nextPageToDoIssues } from '../redux/toDoIssues/slice';
import { API_ROUTES } from 'enums';

export const useResponses = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [, setResponsesState] = useState<ResponseType[]>([]);
  const dispatch: AppDispatch = useDispatch();
  const changes = useSelector(changesValue);
  const app = App.useApp();


  let issues = selectIssues();

  const fetchData = async (index: number) => {
    try {
      const response = await axios.post(BASE_URL.concat(API_ROUTES.API), { index })
      if (issues) setResponsesState(issues);
    } catch (error) {
      app.message.warning((error as AxiosError).message);
    } finally {
      setIsLoading(false);
    }
  };
  
  return {
    fetchData,
    isLoading,
  };
};
