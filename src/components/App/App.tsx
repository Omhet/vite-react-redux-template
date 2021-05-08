import React, { FunctionComponent } from 'react';
import { Header } from '../Header/Header';
import classes from './App.module.scss';
import HomeIcon from '../../icons/home.svg';
import { Example } from '../../containers/Example';

export const App: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <HomeIcon />
      <Header text="Hello" />
      <Example />
    </div>
  );
};
