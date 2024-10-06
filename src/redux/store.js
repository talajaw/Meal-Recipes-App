// // src/redux/store.js
// import { combineReducers } from 'redux';
// import createStore  from '@reduxjs/toolkit';
// import mealReducer from './slices/mealSlice'; // Adjust path as necessary

// const rootReducer = combineReducers({
//   meal: mealReducer,
//   // Add other reducers here if needed
// });

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import mealReducer from '../redux/mealSlice.jsx';
import { createLogger } from 'redux-logger';

const logger = createLogger({
    collapsed: true, // Collapse log messages for easier reading
    diff: true, // Show the difference between the previous and next state
  });

export  const store = configureStore({
  reducer: {
    meal: mealReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Add logger middleware
})