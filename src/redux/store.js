import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import componentsReducer from './slices/componentsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    components: componentsReducer,
    // Add other reducers here as your app grows
  },
  // Enable Redux DevTools in development
  devTools: process.env.NODE_ENV !== "production",
});

export default store; 