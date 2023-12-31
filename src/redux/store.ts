import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { sampleApi } from "./services/sampleApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [sampleApi.reducerPath]: sampleApi.reducer
  },
  devTools: import.meta.env.VITE_APP_NODE_ENV == 'development' ? true : false,
  middleware: gDM => gDM().concat(sampleApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
