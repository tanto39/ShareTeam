import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { constants } from "../constants";
import { ICustomError } from "../models/IError";
import { ICard } from "../models/ICard";

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl: constants.BASE_URL }) as BaseQueryFn<string | FetchArgs, unknown, ICustomError, {}>,
  tagTypes: ['Cards'],
  endpoints: (build) => ({
    fetchCards: build.query({
      query: () => ({
        url: '/api/request',
        headers: {
          'ContentType': 'application/json',
          //'x-csrf-token': 'fetch'
        },
        transform: ( response: ICard[] ) => {
          return response;
        },
      }),
      transformResponse: (response: ICard[]) => {
        //card.csrfToken = meta.response.headers.get('x-csrf-token');
        return response;
      },
      providesTags: result => ['Cards']
    }),
    fetchCard: build.query<ICard, number>({
      query: (id: number) => ({
        url: `/api/request/${id}`,
        headers: {
          'ContentType': 'application/json',
          //'x-csrf-token': 'fetch'
        },
        transform: ( response: ICard[] ) => {
          return response;
        },
      }),
      transformResponse: (response: ICard) => {
        //card.csrfToken = meta.response.headers.get('x-csrf-token');
        return response;
      },
      providesTags: result => ['Cards']
    }),
    createCard: build.mutation<ICard, ICard>({
      query: (card) => ({
        url: '/api/request',
        method: 'POST',
        headers: {
          'ContentType': 'application/json',
          'Accept': 'application/json',
          //'x-csrf-token': 'fetch',
        },
        body: card,
        transform: ( response: ICard ) => {
          return response;
        },
      }),
      transformResponse: (response: ICard, meta: any) => {
        return response;
      },
      invalidatesTags: ['Cards']
    }),
    updateCard: build.mutation<ICard, ICard>({
      query: (card) => ({
        url: `/api/request/${card.id}`,
        method: 'PUT',
        headers: {
          'ContentType': 'application/json',
          'Accept': 'application/json',
          //'x-csrf-token': 'fetch',
        },
        body: card,
        transform: ( response: ICard ) => {
          return response;
        },
      }),
      transformResponse: (response: ICard, meta: any) => {
        return response;
      },
      invalidatesTags: ['Cards']
    }),
  })
})