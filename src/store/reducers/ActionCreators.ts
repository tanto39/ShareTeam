import { IUserInfo } from "../../models/IApp";
import { IFilter } from "../../models/IFilter";
import { AppDispatch } from "../store";
import { appSlice } from "./AppSlice";
import { filterSlice } from "./FilterSlice";

export const setAuth = (userInfo: IUserInfo) => async (dispach: AppDispatch) => {
  dispach(appSlice.actions.userFetching);
  dispach(appSlice.actions.userFetchingSuccess(userInfo));
}

export const setFilter = (filter: IFilter) => async (dispach: AppDispatch) => {
  dispach(filterSlice.actions.setFilter(filter));
}