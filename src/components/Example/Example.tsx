import React, { FC } from 'react';
import classes from './Example.module.scss';

export interface ExampleProps {
  onClick(): void;
}

export const Example: FC<ExampleProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.main}>
      Example
    </button>
  );
};
