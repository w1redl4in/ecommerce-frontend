import React from 'react';

import { Switch, Route } from 'react-router-dom';

import LoginAndRegisterRoute from './wrappers/LoginAndRegisterWrapper';
import HomeRoute from './wrappers/HomeWrapper';

import SignIn from '../pages/LogIn';
import SignUp from '../pages/Register';
import Home from '../pages/Home';
import FirstLoginWrapper from './wrappers/FirstLoginWrapper';

import Page404 from '../pages/Page404';

const Routes: React.FC = () => (
  <Switch>
    <HomeRoute path="/" exact component={Home} />
    <LoginAndRegisterRoute path="/login" component={SignIn} />
    <LoginAndRegisterRoute path="/register" component={SignUp} />
    <FirstLoginWrapper path="/first-login" />
    <Route path="*" component={Page404} />
  </Switch>
);

export default Routes;
