import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push({ ...action.payload, cartCount: 1 });
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.totalPrice -= state.cart[index].price * state.cart[index].cartCount;
      state.cart.splice(index, 1);
    },
    increaseCount: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.cart[index].cartCount++;
      state.totalPrice += state.cart[index].price;
    },
    decreaseCount: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.totalPrice -= state.cart[index].price;
      if (state.cart[index].cartCount == 1) {
        state.cart.splice(index, 1);
        return;
      }
      state.cart[index].cartCount--;
    },
  },
});
export const { addToCart, decreaseCount, increaseCount, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
