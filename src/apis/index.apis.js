import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../config";

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    headers.set(
      `Authorization`,
      `Bearer ${
        localStorage.getItem("cfb90493-c364-4ade-820d-b6848bc65f44") || ""
      }`
    );
  },
});
