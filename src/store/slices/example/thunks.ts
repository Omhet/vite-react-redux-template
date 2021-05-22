import { exampleActions } from './../example';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { exampleRequest } from '../../../api/example';
import { AppThunk } from '../../types';

export const exampleThunk = (): AppThunk => (dispatch, getState) => {
  const {
    example: { count },
  } = getState();
  console.log(count);
  dispatch(exampleActions.increment());
};

export const exampleAsyncThunk = createAsyncThunk('example/fetchExample', async (id: string) => {
  const data = await exampleRequest(id);
  return data;
});
