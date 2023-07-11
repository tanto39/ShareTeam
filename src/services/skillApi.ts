import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { constants } from "../constants";
import { ICustomError } from "../models/IError";
import { ICardSkill } from "../models/ICard";

export const skillAPI = createApi({
  reducerPath: 'skillAPI',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL }) as BaseQueryFn<string | FetchArgs, unknown, ICustomError, {}>,
  tagTypes: ['Skill'],
  endpoints: (build) => ({
    fetchSkills: build.query({
      query: () => ({
        url: '/api/skill',
        headers: {
          'ContentType': 'application/json',
          //'x-csrf-token': 'fetch'
        },
        transform: ( response: ICardSkill[] ) => {
          return response;
        },
      }),
      transformResponse: (response: ICardSkill[]) => {
        //card.csrfToken = meta.response.headers.get('x-csrf-token');
        return response;
      },
      providesTags: result => ['Skill']
    })
  })
})