import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  refreshUser,
  sendFavoriteRocket,
  deleteFavoriteRocket,
  verifyEmail,
  resendVerifyEmail,
} from "./operations";
import toast from "react-hot-toast";

const usersInitState = {
  user: {
    username: "",
    email: "",
    favoriteRockets: [],
  },
  token: "",
  isRefreshing: false,
  isLoggedIn: false,
  isLoading: false,
  isVerificatory: false,
};

const printError = (state, action) => {
  toast.error(action.payload);
  state.isLoading = false;
};

const usersSlice = createSlice({
  name: "user",
  initialState: usersInitState,
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success(action.payload.message, { duration: 8000 });
      })
      .addCase(register.rejected, printError)
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, printError)
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          username: "",
          email: "",
          favoriteRockets: [],
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logout.rejected, printError)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(sendFavoriteRocket.fulfilled, (state, action) => {
        state.user.favoriteRockets.push(action.payload.rocketId);
      })
      .addCase(sendFavoriteRocket.rejected, printError)
      .addCase(deleteFavoriteRocket.fulfilled, (state, action) => {
        state.user.favoriteRockets = state.user.favoriteRockets.filter(
          (id) => id !== action.payload.rocketId
        );
      })
      .addCase(deleteFavoriteRocket.rejected, printError)
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
        state.isVerificatory = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isVerificatory = false;

        toast.success("Email successfully verified");
      })
      .addCase(verifyEmail.rejected, printError)
      .addCase(resendVerifyEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendVerifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success(action.payload.message, { duration: 8000 });
      })
      .addCase(resendVerifyEmail.rejected, printError),
});

export const usersReducer = usersSlice.reducer;
