import React, { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store';
import { Example as ExampleComponent } from '../components/Example/Example';
import { exampleThunk, exampleAsyncThunk } from '../store/slices/example';
import { RequestStatus } from '../types/common';

export const Example: FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.example.status);
  const result = useAppSelector((state) => state.example.result);

  useEffect(() => {
    dispatch(exampleAsyncThunk('123'));
  }, []);

  return (
    <ExampleComponent
      isLoading={status === RequestStatus.Loading}
      data={result?.data ?? ''}
      onClick={() => dispatch(exampleThunk())}
    />
  );
};
