// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if needed
  },
});
