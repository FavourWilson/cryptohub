import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users";
import landingReducer from "./features/landing";
import { QueryClient } from "@tanstack/react-query";

export const store = configureStore({
  reducer: {
    user: userReducer,
    landing: landingReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});



export const queryClient = new QueryClient();
