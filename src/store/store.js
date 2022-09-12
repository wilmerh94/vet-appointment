import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './userSlice';

export const store = configureStore({
   reducer: {
      user: userDataReducer,
   },
});
