import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../types/Types.ts";
import { getProducts } from "../http/product/httpProducts.ts";

interface ProductState {
  loading: boolean;
  data: ProductType[];
}

const initialState: ProductState = {
  loading: false,
  data: [],
};

export const productsSlice = createSlice({
  name: "product",
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
