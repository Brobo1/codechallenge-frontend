import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../types/Types.ts";
import { getProducts } from "../http/product/httpProducts.ts";

type ProductsState = {
  loading: boolean;
  data: ProductType[];
};

const initialState: ProductsState = {
  loading: false,
  data: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});
