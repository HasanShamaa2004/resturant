import { configureStore } from '@reduxjs/toolkit';
import productSlice from './Slices/productSlice';
import orderSlice from './Slices/orderSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    order: orderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
