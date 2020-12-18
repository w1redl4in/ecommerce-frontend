import { Route } from 'react-router-dom';
import Layout from '../layout';
import React from 'react';

export default function LayoutRoute({
  component: Component,
  ...rest
}: any): JSX.Element {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
}

// const LayoutRoute = ({ component: Component }: any, ...rest: any[]) => {
//   return (

//   );
// };
