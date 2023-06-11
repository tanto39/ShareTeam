import { ICustomError } from "./IError"

export interface IAppSlice {
  userInfo: IUserInfo,
  isLoading: boolean,
  error?: ICustomError,
}

export interface IUserInfo {
  isAuth: boolean,
  accessToken?: string,
  user?: IUserResult
}

export interface IUserResult {
  id: number,
  username: string,
  firstname: string,
  email: string,
  lastname: string,
  nameTeam: string,
  teamDescription: string,
  contacts: [
    {
      typeContact: string,
      contact: string
    }
  ]
}