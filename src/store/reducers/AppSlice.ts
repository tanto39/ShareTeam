import React from 'react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppSlice, IUserInfo } from "../../models/IApp";

const InitialState: IAppSlice = {
  userInfo: {
    isAuth: false,
    userName: ''
  },
  isLoading: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState: InitialState,
  reducers: {
    authFetching(state) {
      state.isLoading = true;
      state.userInfo = {isAuth: false, userName: ''};
    },
    authFetchingSuccess(state, action: PayloadAction<IUserInfo>) {
      state.isLoading = false;
      state.userInfo = action.payload;
    }
  }
})

export default appSlice.reducer;