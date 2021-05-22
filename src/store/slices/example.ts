import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../index';

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};
const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
  },
});

export const exampleReducer = slice.reducer;
export const exampleActions = slice.actions;

export const exampleThunk = (): AppThunk => (dispatch, getState) => {
  const {
    example: { count },
  } = getState();
  console.log(count);
  dispatch(exampleActions.increment());
};
