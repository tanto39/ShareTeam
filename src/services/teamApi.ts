import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { constants } from "../constants";
import { ICustomError } from "../models/IError";
import { ITeam } from "../models/ICard";

export const teamAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL }) as BaseQueryFn<string | FetchArgs, unknown, ICustomError, {}>,
  tagTypes: ['Team'],
  endpoints: (build) => ({
    fetchTeams: build.query<ITeam[], ITeam[]>({
      query: () => ({
        url: '',
        headers: {
          'ContentType': 'application/json',
          //'x-csrf-token': 'fetch'
        },
        transform: ( response: ITeam[] ) => {
          return response;
        },
      }),
      transformResponse: (response: ITeam[]) => {
        //card.csrfToken = meta.response.headers.get('x-csrf-token');
        return response;
      },
      providesTags: result => ['Team']
    }),
    createTeam: build.mutation<ITeam, ITeam>({
      query: (team) => ({
        url: '',
        method: 'POST',
        headers: {
          'ContentType': 'application/json',
          'Accept': 'application/json',
          //'x-csrf-token': 'fetch',
        },
        body: team,
        transform: ( response: ITeam ) => {
          return response;
        },
      }),
      transformResponse: (response: ITeam, meta: any) => {
        return response;
      },
      invalidatesTags: ['Team']
    }),
  })
})