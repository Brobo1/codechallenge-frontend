import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType } from "../../types/Types.ts";

export const getProducts = createAsyncThunk(
  "get/products",
  async (): Promise<[ProductType]> => {
    const response = await fetch("https://localhost:7286/api/Product");
    return await response.json();
  },
);
