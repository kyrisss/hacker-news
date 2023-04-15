import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { hackerApi } from "@redux/baseQuery";

const middlewares = [hackerApi.middleware];

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
});

export { store };

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
