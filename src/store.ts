import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/app-slice'

export const store =  configureStore({
  reducer: {
    app: appReducer,
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']