import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppReducers = ReducersMapObject<StateSchema>;
export type StateSchemaKey = keyof StateSchema;

export interface StateSchema {}
export const store = configureStore({
  reducer: {},
});
