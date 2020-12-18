import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import LoginAndRegisterRoute from './wrappers/LoginAndRegisterWrapper';
import HomeRoute from './wrappers/HomeWrapper';

import SignIn from '../pages/LogIn';
import SignUp from '../pages/Register';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <HomeRoute path="/" exact component={Home} />
      <LoginAndRegisterRoute path="/login" component={SignIn} />
      <LoginAndRegisterRoute path="/register" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
