import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "./index.apis";
import { API_URL } from "../config";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  reducerPath: "authApi",
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "login/",
        body,
      }),
    }),
  }),
});

export const authApiReducer = authApi.reducer;
export const { useLoginMutation } = authApi;
