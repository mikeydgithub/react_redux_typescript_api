import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/dataSlice';

// define store
// call our dispatch function to our store. this will be accessing the reducer from data.Slice.ts and updating our store.
export const store = configureStore({
  reducer: {
    data: dataReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

