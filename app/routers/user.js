'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.resources('user', '/api/user', controller.user);
};
