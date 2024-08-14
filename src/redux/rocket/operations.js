import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRockets = createAsyncThunk(
  "rocket/getRockets",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/rockets");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
