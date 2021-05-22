import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../store';
import { Example as ExampleComponent } from '../components/Example/Example';
import { exampleThunk } from '../store/slices/example';

export const Example: FC = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return <ExampleComponent onClick={() => dispatch(exampleThunk())} />;
};
