'use strict';

const Controller = require('egg').Controller;

class UserControl extends Controller {
  /**
   * GET /user
   * @memberof UserControl
   */
  async index() {
    this.ctx.body = 'users';
  }
  /**
   * GET /user/:id
   * @memberof UserControl
   */
  async show() {

  }
  /**
   * POST /user
   * @memberof UserControl
   */
  async create() {

  }
  /**
   * PUT /user
   * @memberof UserControl
   */
  async update() {

  }
  /**
   * DELETE /user/:id
   * @memberof UserControl
   */
  async destroy() {
    
  }
}

module.exports = UserControl;