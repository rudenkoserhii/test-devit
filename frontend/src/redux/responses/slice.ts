import { createSlice } from '@reduxjs/toolkit';
import { ActionTypeResponse, ResponseType } from 'types';

const initialState: { value: ResponseType[] } = {
  value: [],
};

export const responsesSlice = createSlice({
  name: 'responses',
  initialState: initialState,
  reducers: {
    getResponses(state, action: ActionTypeResponse) {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { getResponses } = responsesSlice.actions;
