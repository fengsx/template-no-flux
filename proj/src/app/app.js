import { setup, LogicRender } from 'no-flux';
import { Message, Dialog, EmptyData } from 'uxcore';
import assign from 'object-assign';
import DB from './db';
import './app.less';
<% if (SPA) { %>
import './routes.jsx';
<% } %>

// This is a Chrome only hack
if (__LOCAL__ && window.chrome && window.chrome.webstore) {
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}

// 这里使用setup来配置noflux
setup('fn', {
  message: Message,
  dialog: Dialog,
  DB,
});

const Loading = () => <div className="kuma-loading" />;

// 修改 LogicRender 增加默认配置
// 用来自定义Loading和Empty的样式
LogicRender.defaultProps = assign(LogicRender.defaultProps, { Empty: EmptyData, Loading });

