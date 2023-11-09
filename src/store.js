import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import userReducer from "./features/users";
import landingReducer from "./features/landing";
import { QueryClient } from "@tanstack/react-query";
import { authApi, authApiReducer } from "./apis/authApi.apis";

export const rootReducer = combineReducers({
  user: userReducer,
  landing: landingReducer,
  authApi: authApiReducer,
});

const middleware = [...getDefaultMiddleware(), authApi.middleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const queryClient = new QueryClient();
