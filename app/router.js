'use strict';
const userRouter = require('./routers/user');
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.web.home);
  router.resources('user', '/api/v1/user', controller.user);

  router.get('(/.+)?', controller.web.home); // 访问/开头的路径默认跳转到前端页面

  userRouter(app);
};