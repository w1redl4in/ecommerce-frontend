import { Route } from 'react-router-dom';
import HomeLayout from '../../layout/Home';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/rootReducer';

export default function LoginAndRegisterLayout({
  component: Component,
  ...rest
}: any): JSX.Element {
  const { firstLogin } = useSelector((state: AppState) => state.userStore.user);

  console.log(firstLogin, 'firstLogin');

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
