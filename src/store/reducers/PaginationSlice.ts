import React from 'react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPagination, IPaginationSlice } from '../../models/IPagination';
import { constants } from '../../constants';

export const InitialPagination: IPaginationSlice = {
  pagination: {
    page: 0,
    pageSize: constants.PAGE_SIZE,
  }
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: InitialPagination,
  reducers: {
    setPagination(state, action: PayloadAction<IPagination>) {
      state.pagination = action.payload;
    }
  }
})

export default paginationSlice.reducer;