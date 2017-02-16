import 'no-flux-conf';
<% if (SPA) { %>
import { render } from 'react-dom';
import { Routes } from './routes.jsx';<% } %>
import './app.less';


// This is a Chrome only hack
if (__LOCAL__ && window.chrome && window.chrome.webstore) {
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}<% if (SPA) { %>
render(Routes, document.getElementById('App'));<% } %>