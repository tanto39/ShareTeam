
export interface IAppSlice {
  userInfo: IUserInfo,
  isLoading: boolean,
}

export interface IUserInfo {
  isAuth: boolean,
  userName: string,
  team: string,
}