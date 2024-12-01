import { configureStore } from '@reduxjs/toolkit';
import { responsesSlice } from './responses/slice';
import { qtySlice } from './qty/slice';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    responses: responsesSlice.reducer,
    qty: qtySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
