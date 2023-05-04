import React from 'react';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter, IFilterSlice } from './../../models/IFilter';

export const InitialState: IFilterSlice = {
  filter: {
    person: '',
    project: '',
    description: '',
    endDate: '',
    skills: []
  }
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: InitialState,
  reducers: {
    setFilter(state, action: PayloadAction<IFilter>) {
      state.filter = action.payload;
    }
  }
})

export default filterSlice.reducer;