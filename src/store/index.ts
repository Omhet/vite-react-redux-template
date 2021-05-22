import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { exampleReducer } from './slices/example';
import { AppDispatch, RootState } from './types';

const reducer = {
  example: exampleReducer,
};

export const store = configureStore({
  reducer,
});

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
