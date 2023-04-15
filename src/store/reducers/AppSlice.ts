import React from 'react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppSlice } from "../../models/IApp";

const InitialState: IAppSlice = {
  isAuth: false,
  isLoading: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState: InitialState,
  reducers: {
    authFetching(state) {
      state.isLoading = true;
      state.isAuth = false;
    },
    authFetchingSuccess(state, action: PayloadAction<boolean>) {
      state.isLoading = false;
      state.isAuth = action.payload;
    }
  }
})

export default appSlice.reducer;