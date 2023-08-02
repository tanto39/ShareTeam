import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";
import { constants } from "../constants";
import { ICustomError } from "../models/IError";
import { IResource } from "../models/IResource";
import { RootState } from "../store/store";

export const resourceAPI = createApi({
  reducerPath: "resourceAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: constants.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).appReduser.userInfo.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, ICustomError, {}>,
  tagTypes: ["Resources"],
  endpoints: (build) => ({
    fetchResources: build.query({
      query: () => ({
        url: "/api/resources",
        headers: {
          ContentType: "application/json",
          //'x-csrf-token': 'fetch'
        },
        transform: (response: IResource[]) => {
          return response;
        },
      }),
      transformResponse: (response: IResource[]) => {
        //card.csrfToken = meta.response.headers.get('x-csrf-token');
        return response;
      },
      providesTags: (result) => ["Resources"],
    }),
    fetchResource: build.query<IResource, number>({
      query: (id: number) => ({
        url: `/api/resources/${id}`,
        headers: {
          ContentType: "application/json",
          //'x-csrf-token': 'fetch'
        },
        transform: (response: IResource[]) => {
          return response;
        },
      }),
      transformResponse: (response: IResource) => {
        //card.csrfToken = meta.response.headers.get('x-csrf-token');
        return response;
      },
      providesTags: (result) => ["Resources"],
    }),
    createResource: build.mutation<IResource, IResource>({
      query: (card) => ({
        url: "/api/resources",
        method: "POST",
        headers: {
          ContentType: "application/json",
          Accept: "application/json",
          //'x-csrf-token': 'fetch',
        },
        body: card,
        transform: (response: IResource) => {
          return response;
        },
      }),
      transformResponse: (response: IResource, meta: any) => {
        return response;
      },
      invalidatesTags: ["Resources"],
    }),
    updateResource: build.mutation<IResource, IResource>({
      query: (card) => ({
        url: `/api/resources/${card.id}`,
        method: "PUT",
        headers: {
          ContentType: "application/json",
          Accept: "application/json",
          //'x-csrf-token': 'fetch',
        },
        body: card,
        transform: (response: IResource) => {
          return response;
        },
      }),
      transformResponse: (response: IResource, meta: any) => {
        return response;
      },
      invalidatesTags: ["Resources"],
    }),
    deleteResource: build.mutation<any, number>({
      query: (id) => ({
        url: `/api/resources/${id}`,
        method: "DELETE",
        headers: {
          //'ContentType': 'application/json',
          Accept: "*",
          //'x-csrf-token': 'fetch',
        },
      }),
      invalidatesTags: ["Resources"],
    }),
  }),
});
