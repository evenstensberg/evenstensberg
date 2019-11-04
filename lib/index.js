import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const render = (Component) => {
  ReactDOM.hydrate(
    <AppContainer>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const nextApp = require('./app').default;
    render(nextApp);
  });
}