import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface CartSliceProps {
  amount: number;
}

const initialState: CartSliceProps = {
  amount: JSON.parse(localStorage.getItem('cart') as string)
    ? JSON.parse(localStorage.getItem('cart') as string).length
    : 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateAmountCart(state) {
      const cartList = JSON.parse(localStorage.getItem('cart') as string);
      if (cartList) {
        console.log(cartList);
        state.amount = cartList.length;
      } else {
        state.amount = 0;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export const selectCartAmount = (state: RootState) => state.cart.amount;
export const cartReducer = cartSlice.reducer;
