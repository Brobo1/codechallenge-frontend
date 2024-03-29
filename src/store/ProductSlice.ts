import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../types/Types.ts";
import { getProduct } from "../http/product/httpProduct.ts";

type ProductState = {
  loading: boolean;
  data: ProductType;
};

const initialState: ProductState = {
  loading: false,
  data: { id: 0, name: "", price: 0, description: "" },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.loading = false;
    });
  },
});
