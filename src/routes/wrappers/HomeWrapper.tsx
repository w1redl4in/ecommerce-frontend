import { Route } from 'react-router-dom';
import HomeLayout from '../../layout/Home';
import React from 'react';

export default function LoginAndRegisterLayout({
  component: Component,
  ...rest
}: any): JSX.Element {
  return (
    <Route
      {...rest}
      render={(props) => (
        <HomeLayout>
          <Component />
        </HomeLayout>
      )}
    />
  );
}
