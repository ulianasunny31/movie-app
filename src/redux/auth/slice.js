import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isLoading: false,
  isRefreshing: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase;
  },
});
