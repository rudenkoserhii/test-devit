import { createSlice } from '@reduxjs/toolkit';
import { ActionTypeQty, QtyType } from 'types';

const initialState: { value: QtyType } = {
  value: null,
};

export const qtySlice = createSlice({
  name: 'qty',
  initialState: initialState,
  reducers: {
    setQty(state, action: ActionTypeQty) {
      state.value = action.payload;
    },
  },
});

export const { setQty } = qtySlice.actions;
