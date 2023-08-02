import { BaseQueryMeta } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { constants } from "../constants";
import { ICustomError } from "../models/IError";
import { IUserParamsGet, IUserResult } from "../models/IApp";
import { ISignUp } from "../models/ISignUp";
import { IMessage } from "../models/IMessage";
import { ILogin, ILoginResult } from "../models/Ilogin";

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL }) as BaseQueryFn<string | FetchArgs, unknown, ICustomError | IMessage, {}>,
  tagTypes: ['User'],
  endpoints: (build) => ({
    fetchUser: build.query<IUserResult, IUserParamsGet>({
      query: (params) => ({
        url: `/api/user/${params.id}`,
        headers: {
          'ContentType': 'application/json',
          'Authorization': `Bearer ${params.accessToken}`,
          //'x-csrf-token': 'fetch'
        },
        transform: ( response: IUserResult  ) => {
          return response;
        },
      }),
      transformResponse: (response: IUserResult ) => {
        //card.csrfToken = meta.response.headers.get('x-csrf-token');
        return response;
      },
      providesTags: result => ['User']
    }),
    signUp: build.mutation<IMessage, ISignUp>({
      query: (signUp) => ({
        url: '/api/auth/signup',
        method: 'POST',
        headers: {
          'ContentType': 'application/json',
          'Accept': 'application/json',
          //'x-csrf-token': 'fetch',
        },
        body: signUp,
        transform: ( response: IMessage ) => {
          return response;
        },
      }),
      // transformResponse: (response: IMessage, meta: any) => {
      //   return response;
      // },
      invalidatesTags: ['User']
    }),
    signIn: build.mutation<ILoginResult, ILogin>({
      query: (ILogin) => ({
        url: '/api/auth/signin',
        method: 'POST',
        headers: {
          'ContentType': 'application/json',
          'Accept': 'application/json',
          //'x-csrf-token': 'fetch',
        },
        body: ILogin,
        transform: ( response: ILoginResult ) => {
          return response;
        },
      }),
      // transformResponse: (response: IMessage, meta: any) => {
      //   return response;
      // },
      invalidatesTags: ['User']
    }),
  })
})