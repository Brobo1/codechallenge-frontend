import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../http/category/httpCategories.ts";
import { CategoryType } from "../types/Types.ts";

type NavState = {
  category: CategoryType[];
  currentCategory: string;
  loading: boolean;
};

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    currentCategory: "",
    category: [],
    loading: false,
  } as NavState,
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setCurrentCategory } = navSlice.actions;
