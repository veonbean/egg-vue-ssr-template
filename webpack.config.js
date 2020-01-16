'use strict';
// 零配置简化, 详情：https://www.yuque.com/easy-team/easywebpack/v4
module.exports = {
  devtool: 'eval',
  target: 'web',
  entry: {
    web: 'app/web/page/index.js'
  },
  cssExtract: true,
  dll: ['vue', 'vue-router', 'vuex', 'axios', 'vuex-router-sync', 'vue-i18n'],
  module: {
    rules: [
      {
        less: true,
      }
    ]
  }
};