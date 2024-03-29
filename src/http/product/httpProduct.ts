import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType } from "../../types/Types.ts";

export const getProduct = createAsyncThunk(
  "get/product",
  async (id: number): Promise<ProductType> => {
    const response = await fetch(`https://localhost:7286/api/Product/${id}`);
    return await response.json();
  },
);
