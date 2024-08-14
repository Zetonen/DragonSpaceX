import { createSlice } from "@reduxjs/toolkit";
import { getRockets } from "./operations";
import toast from "react-hot-toast";

const rocketsInitState = {
  rockets: [],
  isLoading: false,
};

const printError = (state, action) => {
  toast.error(action.payload);
  state.isLoading = false;
};

const rocketsSlice = createSlice({
  name: "rocket",
  initialState: rocketsInitState,
  extraReducers: (builder) =>
    builder
      .addCase(getRockets.pending, (state) => {
        if (state.rockets.length === 0) {
          state.isLoading = true;
        }
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.rockets = [
          ...action.payload,
          ...action.payload,
          ...action.payload,
        ];
        state.isLoading = false;
      })
      .addCase(getRockets.rejected, printError),
});

export const rocketsReducer = rocketsSlice.reducer;
