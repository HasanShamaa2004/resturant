import { OrderState, ProductOrder } from '@/app/src/types/Slices/OrderSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: OrderState = {
  table_number: 0,
  lat: 0.0,
  long: 0.0,
  phone_number: '',
  take_away_time: '',
  street_address: '',
  building_name: '',
  apartment_number: '',
  order_type: 'required',
  products: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateOrderDetails: (state, action: PayloadAction<Partial<OrderState>>) => {
      Object.assign(state, action.payload);
    },
    addProductToOrder: (state, action: PayloadAction<ProductOrder>) => {
      state.products.push(action.payload);
    },
    removeProductFromOrder: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((p) => p.product_id !== action.payload);
    },
  },
});

export const { updateOrderDetails, addProductToOrder, removeProductFromOrder } = orderSlice.actions;
export default orderSlice.reducer;
