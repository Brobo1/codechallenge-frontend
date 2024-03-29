import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./ProductsSlice.ts";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { productSlice } from "./ProductSlice.ts";
import { navSlice } from "./NavSlice.ts";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    product: productSlice.reducer,
    nav: navSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
