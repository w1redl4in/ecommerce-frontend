import './config/Reactotron';
import React from 'react';
import './App.less';
import Routes from './routes/routes';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes />;
    </Provider>
  );
}

export default App;
