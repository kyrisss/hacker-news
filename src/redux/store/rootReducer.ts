import { hackerApi } from "@redux/baseQuery";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [hackerApi.reducerPath]: hackerApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
