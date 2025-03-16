import { createSlice } from '@reduxjs/toolkit';
import { Theme } from '@/types/types';


// Check if we're in a browser environment and get the initial theme preference
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check for system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.dark : Theme.light;
  }
  
  // Default to light theme on server-side
  return 'light';
};

const initialState = {
  theme: getInitialTheme(), // Will be updated in the store initialization
  systemPreference: getInitialTheme(),
  useSystemPreference: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      state.useSystemPreference = false;
      
      // Update localStorage and document class when in browser
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', action.payload);
        
        // Update document class for CSS styling
        if (action.payload === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    },
    toggleTheme: (state) => {
      const newTheme = state.theme === Theme.dark ? Theme.light : Theme.dark;
      state.theme = newTheme;
      state.useSystemPreference = false;
      
      // Update localStorage and document class when in browser
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme);
        
        // Update document class for CSS styling
        if (newTheme === Theme.dark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    },
    setSystemPreference: (state, action) => {
      state.systemPreference = action.payload;
      
      // If using system preference, update theme accordingly
      if (state.useSystemPreference) {
        state.theme = action.payload;
        
        // Update document class for CSS styling
        if (typeof window !== 'undefined') {
          if (action.payload === Theme.dark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      }
    },
    enableSystemPreference: (state) => {
      state.useSystemPreference = true;
      state.theme = state.systemPreference;
      
      // Update localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('theme'); // Remove saved preference
        
        // Update document class for CSS styling
        if (state.systemPreference === Theme.dark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    },
  },
});

export const { setTheme, toggleTheme, setSystemPreference, enableSystemPreference } = themeSlice.actions;

export default themeSlice.reducer; 