import { assign, pick } from 'lodash';

export default {
  // defaults 返回一个对象，用于初始化页面state
  defaults(props) {
    return {
      empty: true,
      workNo: '',
    };
  },
  // fn 上挂在了在app.js中定义的 dialog 和 message、DB
  // 还有 setState/getState/getProps 三个方法
  updateState({ setState }, data) {
    setState(data);
  },

  // awareOf 是 LogicRender 检测到需要执行action的时候带出来的
  // awareOf 是上一次的“当前”数据，可以从 getState 中获取最新的
  async search({ setState, getState, getProps, fn: { message, DB, history } }, awareOf) {
    const params = pick(getState(), ['workNo']);
    let state = {};
    try {
      const users = await DB.User.query(params);

      const empty = !users.data.length;

      if (empty) {
        message.info(`${params.workNo}查无数据！`);
      } else {
        message.success(`${params.workNo}请求成功！`);
      }

      state = assign(users, { empty });
    } catch (e) {
      message.error(`${params.workNo}请求出错啦！`);
      state = { users: [], empty: false };
    }
    setState(state);
  },
};
