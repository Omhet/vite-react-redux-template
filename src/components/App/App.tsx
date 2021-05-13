import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeIcon from '../../icons/home.svg';
import { Header } from '../Header/Header';
import classes from './App.module.scss';
import { MainPage } from '../../pages/MainPage/MainPage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

export const App: FunctionComponent = () => {
  return (
    <Router>
      <div className={classes.main}>
        <HomeIcon />
        <Header text="Hello" />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
