import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "./index.apis";

export const authApi = createApi({
  baseQuery: baseQuery,
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
