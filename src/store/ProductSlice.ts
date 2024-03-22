import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../types/Types.ts";
import { fetchProducts } from "../http/fetchProducts.ts";

interface ProductState {
  loading: boolean;
  data: ProductType[];
}

const initialState: ProductState = {
  loading: false,
  data: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});
