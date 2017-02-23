import { isDev } from 'variables';<% if (SPA) { %>
import { render } from 'react-dom';
import { Routes } from './routes.jsx';<% } %>
import './app.less';
import './no-flux-conf';

// This is a Chrome only hack
if (isDev && window.chrome && window.chrome.webstore) {
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}<% if (SPA) { %>
render(Routes, document.getElementById('App'));<% } %>
