'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  var entryApp = config.entry.app;
  if(Array.isArray(entryApp) ) {
    if(entryApp.indexOf('no-flux') === -1) {
      config.entry.app.splice(1, -1, 'no-flux');
    }
  }
  else {
    config.entry.app = ['no-flux', entryApp];
  }
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'app',
    minChunks: Infinity,
  }));

  if (process.argv[2] == 'server') {
    config.externals = [{
        'lie': 'window.Promise',
        'natty-fetch': 'window.nattyFetch',
        'react': 'window.React',
        'react-dom': 'window.ReactDOM || window.React',
        'react-router': 'window.ReactRouter'
      },
      (context, request, callback, matches) => {
        if (/uxcore\/assets\//.test(request)) {
          callback(null, '0');
        } else if (matches = /uxcore\/lib\/(\w+)/.exec(request)) {
          callback(null, `window.Uxcore.${matches[1]}`);
        } else if (matches = /react\-addons((\-\w+)+)/.exec(request)) {
          const addon = matches[1].replace(/\-((\w)(\w+))/g, (p, p1, p2, p3) =>
            (!/^(css|dom|umd)$/.test(p1) ? p2.toUpperCase() + p3 : p1.toUpperCase())
          );
          callback(null, `window.React.addons.${addon}`);
        } else {
          callback();
        }
      },
    ];
  } else {
    delete config.externals;
    config.module.loaders.forEach((n) => {
      if (/\.css/.test(n.test)) {
        delete n.include;
      }
    });
  }
};
