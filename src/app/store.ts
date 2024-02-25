import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "../features/api/apiSlice"
import sidebarReducer from "../features/sidebar/sidebarSlice"
import authReducer from "../features/admin/authSlice"
import businessInfoReducer from "../features/admin/dashboard/businessInfo/businessInfoSlice"
import servicesReducer from "../features/services/servicesSlice"

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    businessInfo: businessInfoReducer,
    services: servicesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
