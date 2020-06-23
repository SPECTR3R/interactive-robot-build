import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StartSequence from './sequences/StartSequence/StartSequence';
import interactiveSequence from './sequences/InteractiveSequence/InteractiveSequence';
import winSequence from './sequences/winSequence';
import outroSequence from './sequences/outroSequence';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact component={StartSequence} path="/"/>
      <Route exact component={interactiveSequence} path="/interactiveSequence" />

      <Route exact component={winSequence} path="/winSequence" />

       <Route exact component={outroSequence} path="/outroSequence" />
    </Switch>
  </BrowserRouter>
);
export default Router;
