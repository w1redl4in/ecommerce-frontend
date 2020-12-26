import { Redirect, Route } from 'react-router-dom';
import Layout from '../../layout/FirstLogin';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootReducer';

export default function FirstLoginWrapper({
  component: Component,
  ...rest
}: any): JSX.Element {
  const { firstLogin } = useSelector((state: AppState) => state.auth.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        firstLogin ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
