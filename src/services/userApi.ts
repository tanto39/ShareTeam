import { BaseQueryMeta } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { constants } from "../constants";
import { ICustomError } from "../models/IError";
import { IUserInfo } from "../models/IApp";
import { ISignUp } from "../models/ISignUp";

export const userAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL }) as BaseQueryFn<string | FetchArgs, unknown, ICustomError, {}>,
  tagTypes: ['User'],
  endpoints: (build) => ({
    fetchUser: build.query<IUserInfo, IUserInfo>({
      query: () => ({
        url: '',
        headers: {
          'ContentType': 'application/json',
          //'x-csrf-token': 'fetch'
        },
        transform: ( response: IUserInfo ) => {
          return response;
        },
      }),
      transformResponse: (response: IUserInfo) => {
        //card.csrfToken = meta.response.headers.get('x-csrf-token');
        return response;
      },
      providesTags: result => ['User']
    }),
    signUp: build.mutation<ISignUp, ISignUp>({
      query: (signUp) => ({
        url: '',
        method: 'POST',
        headers: {
          'ContentType': 'application/json',
          'Accept': 'application/json',
          //'x-csrf-token': 'fetch',
        },
        body: signUp,
        transform: ( response: ISignUp ) => {
          return response;
        },
      }),
      transformResponse: (response: ISignUp, meta: any) => {
        return response;
      },
      invalidatesTags: ['User']
    }),
  })
})