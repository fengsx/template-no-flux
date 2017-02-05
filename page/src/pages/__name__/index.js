<% if (SPA) { %>
export default {
  path: '<%- name %>',
  title: '<%- name %>',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Page<%- Name %>.jsx'));
    }, '<%- name %>');
  },
};

<%}else{%>
import '../../app/noflux-conf.js';

export default from './Page<%- Name %>.jsx';

<% } %>
