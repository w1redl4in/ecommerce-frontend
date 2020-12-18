import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import LayoutRoute from './layoutRoute';

import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <LayoutRoute path="/" exact component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
