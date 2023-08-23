import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReduser from "./reducers/AppSlice";
import filterReduser from "./reducers/FilterSlice";
import paginationReduser from "./reducers/PaginationSlice";
import { userAPI } from "../services/userApi";
import { teamAPI } from "../services/teamApi";
import { cardsAPI } from "../services/cardsApi";
import { skillAPI } from "../services/skillApi";
import { resourceAPI } from "../services/resourceApi";

const rootReducer = combineReducers({
  appReduser,
  filterReduser,
  paginationReduser,
  [userAPI.reducerPath]: userAPI.reducer,
  [teamAPI.reducerPath]: teamAPI.reducer,
  [cardsAPI.reducerPath]: cardsAPI.reducer,
  [skillAPI.reducerPath]: skillAPI.reducer,
  [resourceAPI.reducerPath]: resourceAPI.reducer,
});

const middlewares = [
  userAPI.middleware,
  teamAPI.middleware,
  cardsAPI.middleware,
  skillAPI.middleware,
  resourceAPI.middleware,
] as const;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
