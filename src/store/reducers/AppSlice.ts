import React from 'react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppSlice, IUserInfo } from "../../models/IApp";
import { ICustomError } from '../../models/IError';

export const InitialState: IAppSlice = {
  userInfo: {
    isAuth: false
  },
  isLoading: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState: InitialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true;
      state.userInfo = InitialState.userInfo;
    },
    userFetchingSuccess(state, action: PayloadAction<IUserInfo>) {
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    userFetchingError(state, action: PayloadAction<ICustomError>) {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export default appSlice.reducer;