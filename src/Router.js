import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import startSequence from './sequences/startSequence';
import interactiveSequence from './sequences/interactiveSequence';
import winSequence from './sequences/winSequence';
import outroSequence from './sequences/outroSequence';

// import c from './pages/AuthPage';
// import MainPage from './pages/MainPage';
// import Footer from './components/Footer';
// import PrivateRoute from './components/PrivateRoute';
// import Navbar from './components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact component={startSequence} path="/" />
      <Route exact component={interactiveSequence} path="/interactiveSequence" />
      <Route exact component={winSequence} path="/winSequence" />
      <Route exact component={outroSequence} path="/outroSequence" />
    </Switch>
  </BrowserRouter>
);
export default Routes;
