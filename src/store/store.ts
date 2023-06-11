import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReduser from './reducers/AppSlice';
import filterReduser from './reducers/FilterSlice';
import { userAPI } from "../services/userApi";

const rootReducer = combineReducers({
  appReduser,
  filterReduser,
  [userAPI.reducerPath]: userAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']