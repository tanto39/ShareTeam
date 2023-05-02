import { IUserInfo } from "../../models/IApp";
import { AppDispatch } from "../store";
import { appSlice } from "./AppSlice";

export const setAuth = (userInfo: IUserInfo) => async (dispach: AppDispatch) => {
  dispach(appSlice.actions.authFetching);
  dispach(appSlice.actions.authFetchingSuccess(userInfo));
}