import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

function onContainerNavigate(location, history) {
  const { pathname: nextPathname } = location;
  const { pathname } = history.location;

  if (pathname !== nextPathname) {
    history.push(nextPathname);
  }
}

function mount(element, options) {
  const { onNavigate, defaultHistory, initialPath, onSignIn } = options;
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, element);

  return {
    onContainerNavigate: (location) => onContainerNavigate(location, history),
  };
}

const isDev = process.env.NODE_ENV === 'development';
const devRoot = document.querySelector('#_auth-dev-root');
const isIsolationMode = !!devRoot;

if (isDev && isIsolationMode) {
  const defaultHistory = createBrowserHistory();

  mount(devRoot, { defaultHistory });
}

export { mount };
