import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryType } from "../../types/Types.ts";

export const getCategories = createAsyncThunk(
  "get/categories",
  async (): Promise<[CategoryType]> => {
    const response = await fetch(`https://localhost:7286/api/category`);
    return await response.json();
  },
);
