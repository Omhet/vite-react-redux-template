import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../index';
import { RequestStatus } from '../../types/common';
import { exampleRequest } from '../../api/example';

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

interface State {
  count: number;
  status: RequestStatus;
  error: string | null;
  result: { data: string } | null;
}

const initialState: State = {
  count: 0,
  status: RequestStatus.Idle,
  error: null,
  result: null,
};
const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(exampleAsyncThunk.pending, (state) => {
      state.status = RequestStatus.Loading;
    });
    builder.addCase(exampleAsyncThunk.fulfilled, (state, { payload }) => {
      state.status = RequestStatus.Success;
      state.result = payload;
    });
    builder.addCase(exampleAsyncThunk.rejected, (state) => {
      state.status = RequestStatus.Error;
      state.error = 'Error';
    });
  },
});

export const exampleReducer = slice.reducer;
export const exampleActions = slice.actions;
