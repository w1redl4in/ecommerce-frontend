import './config/Reactotron';
import React from 'react';
import './App.less';
import Routes from './routes/routes';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Helmet from 'react-helmet';
import favicon from './assets/buy.svg';
import history from './services/history';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ecommerce</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Router history={history}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </Router>
    </BrowserRouter>
  );
}

export default App;
