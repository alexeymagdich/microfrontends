import { createApp } from 'vue';

import Dashboard from './components/Dashboard.vue';

function mount(element, _options) {
  const app = createApp(Dashboard);

  app.mount(element);
}

const isDev = process.env.NODE_ENV === 'development';
const devRoot = document.querySelector('#_dashboard-dev-root');
const isIsolationMode = !!devRoot;

if (isDev && isIsolationMode) {
  mount(devRoot);
}

export { mount };
