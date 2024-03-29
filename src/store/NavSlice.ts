import { createSlice } from "@reduxjs/toolkit";

type NavState = {
  current: string;
};

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    current: "",
  } as NavState,
  reducers: {},
});
