import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StartSequence from './pages/StartSequence';
import interactiveSequence from './pages/InteractiveSequence';
//import winSequence from './pages/winSequence';
//import outroSequence from './pages/outroSequence';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact component={StartSequence} path="/"/>
      <Route exact component={interactiveSequence} path="/interactiveSequence" />

    </Switch>
  </BrowserRouter>
);
export default Router;
