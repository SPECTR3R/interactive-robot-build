import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StartSequence from './pages/StartSequence';
import InteractiveSequence from './pages/InteractiveSequence';
 import OutroSequence from './pages/OutroSequence/index.js'
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact component={StartSequence} path="/" />
      <Route exact component={InteractiveSequence} path="/interactiveSequence" />
      <Route exact component={OutroSequence} path="/outroSequence" />
    </Switch>
  </BrowserRouter>
);
export default Router;
