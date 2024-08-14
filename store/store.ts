import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducers/CartReducer";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: CartReducer,
    },
  });
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
