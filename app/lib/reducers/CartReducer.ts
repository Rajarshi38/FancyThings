import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductWithCount extends Product {
  cartCount: number;
}

const initialState: { cart: ProductWithCount[] } = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push({ ...action.payload, cartCount: 1 });
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.cart.splice(index, 1);
    },
    increaseCount: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.cart[index].cartCount++;
    },
    decreaseCount: (state, action: PayloadAction<number>) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.cart[index].cartCount--;
    },
  },
});
export const { addToCart, decreaseCount, increaseCount, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
