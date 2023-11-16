import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../config";

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    headers.set(
      `Authorization`,
      `Bearer ${
        localStorage.getItem("e70913ab-4047-48bc-8c33-aa2e7b3aeb2a") || ""
      }`
    );
  },
});
