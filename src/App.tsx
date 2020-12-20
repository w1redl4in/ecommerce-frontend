import './config/Reactotron';
import React from 'react';
import './App.less';
import Routes from './routes/routes';
import { Provider } from 'react-redux';
import store from './store';
import Helmet from 'react-helmet';
import favicon from './assets/buy.svg';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-commerce</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Provider store={store}>
        <Routes />;
      </Provider>
    </>
  );
}

export default App;
