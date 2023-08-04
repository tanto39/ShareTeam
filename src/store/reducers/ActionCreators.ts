import { IUserInfo } from "../../models/IApp";
import { IFilter } from "../../models/IFilter";
import { IPagination } from "../../models/IPagination";
import { AppDispatch } from "../store";
import { appSlice } from "./AppSlice";
import { filterSlice } from "./FilterSlice";
import { paginationSlice } from "./PaginationSlice";

export const setAuth = (userInfo: IUserInfo) => async (dispach: AppDispatch) => {
  dispach(appSlice.actions.userFetching);
  dispach(appSlice.actions.userFetchingSuccess(userInfo));
};

export const setFilter = (filter: IFilter) => async (dispach: AppDispatch) => {
  dispach(filterSlice.actions.setFilter(filter));
};

export const setPagination = (pagination: IPagination) => async (dispach: AppDispatch) => {
  dispach(paginationSlice.actions.setPagination(pagination));
};