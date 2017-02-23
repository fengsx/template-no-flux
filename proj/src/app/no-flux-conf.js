import { setup, LogicRender } from 'no-flux';
import Message from 'uxcore/lib/Message';
import Dialog from 'uxcore/lib/Dialog';
import EmptyData from 'uxcore/lib/EmptyData';

import { assign } from 'lodash';
import DB from './db';<% if (SPA) { %>
import { history } from './routes.jsx';<% } %>

// 这里使用setup来配置noflux
setup('fn', {
  message: Message,
  dialog: Dialog,
  DB,<% if (SPA) { %>
  history,<% } %>
});

const Loading = () => <div className="kuma-loading" />;
const Empty = EmptyData || (() => <div>暂无数据</div>);

// 修改 LogicRender 增加默认配置
// 用来自定义Loading和Empty的样式
assign(LogicRender.defaultProps, { Empty, Loading });

