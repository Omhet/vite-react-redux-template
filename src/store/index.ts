import { configureStore } from '@reduxjs/toolkit';
import { exampleReducer } from './slices/example';

const reducer = {
  example: exampleReducer,
};

export const store = configureStore({
  reducer,
});
