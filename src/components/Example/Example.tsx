import React, { FC } from 'react';
import classes from './Example.module.scss';

export interface ExampleProps {
  onClick(): void;
  isLoading: boolean;
  data: string;
}

export const Example: FC<ExampleProps> = ({ onClick, isLoading, data }) => {
  return (
    <button onClick={onClick} className={classes.main}>
      {isLoading ? 'Loading...' : data}
    </button>
  );
};
