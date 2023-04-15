import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReduser from './reducers/AppSlice'

const rootReducer = combineReducers({
  appReduser
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']