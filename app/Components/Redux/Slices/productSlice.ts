import { Product, ProductState } from '@/app/src/types/Slices/ProductSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state : ProductState, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.count += 1;
      }
    },
    decrement: (state: ProductState, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        if (product.count > 1) {
          product.count -= 1;
        } else {
          state.products = state.products.filter((p) => p.id !== action.payload);
        }
      }
    },
    remove: (state : ProductState, action: PayloadAction<number>) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    addProduct: (state: ProductState, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

export const { increment, decrement, remove, addProduct } = productSlice.actions;
export default productSlice.reducer;
