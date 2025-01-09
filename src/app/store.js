import { configureStore } from '@reduxjs/toolkit'
import { leadsApi } from '../services/leadsApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [leadsApi.reducerPath] : leadsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(leadsApi.middleware),
})
setupListeners(store.dispatch)