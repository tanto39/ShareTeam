import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReduser from "./reducers/AppSlice";
import filterReduser from "./reducers/FilterSlice";
import { userAPI } from "../services/userApi";
import { teamAPI } from "../services/teamApi";

const rootReducer = combineReducers({
  appReduser,
  filterReduser,
  [userAPI.reducerPath]: userAPI.reducer,
  [teamAPI.reducerPath]: teamAPI.reducer,
});

const middlewares = [userAPI.middleware, teamAPI.middleware] as const;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
