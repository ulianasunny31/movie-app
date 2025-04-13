import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations';

const initialState = {
  user: {},
  isLoggedIn: false,
  isRefreshing: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log('Register: ', payload);

        const { uid, email } = payload;
        state.user = { uid, email };
        state.isLoggedIn = true;
        state.token = payload.token;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log('Login: ', payload);

        const { uid, email } = payload;
        state.user = { uid, email };
        state.isLoggedIn = true;
        state.token = payload.token;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = {};
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(loginUser.rejected, registerUser.rejected, logoutUser),
        (state) => {
          //add err handling message appearance
          return state;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
