var path = require('path');

module.exports = function (config) {
  // 增加别名，方便引用
  config.resolve.alias = config.resolve.alias || {};
  config.resolve.alias.db = path.join(__dirname, 'src/app/db.js');
  config.resolve.alias['no-flux-conf'] = path.join(__dirname, 'src/app/no-flux-conf.js');
}