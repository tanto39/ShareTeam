import { AppDispatch } from "../store";
import { appSlice } from "./AppSlice";

export const setAuth = (isAuth: boolean) => async (dispach: AppDispatch) => {
  dispach(appSlice.actions.authFetching);
  dispach(appSlice.actions.authFetchingSuccess(isAuth));
}