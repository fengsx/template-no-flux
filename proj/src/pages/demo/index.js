<% if (SPA) { %>
export default {
  path: 'demo',
  title: 'demo',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageDemo.jsx'));
    }, 'demo');
  },
};

<%}else{%>
import '../../app/noflux-conf.js';
  
export default from './PageDemo.jsx';

<% } %>
