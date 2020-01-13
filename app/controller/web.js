'use strict';
const egg = require('egg');
module.exports = class WebController extends egg.Controller {
  async home(ctx) {
    const url = ctx.url.replace(/\/web/, '');
    console.log(url);
    await ctx.renderClient('web.js', { ctx, url });
  }
  async list(ctx) {
    this.ctx.body = await ctx.service.article.getArtilceList(ctx.request.body);
  }
  async add(ctx) {
    ctx.body = await this.service.article.saveArticle(ctx.request.body);
  }
  async del(ctx) {
    const { id } = ctx.params;
    ctx.body = await this.service.article.deleteArticle(id);
  }
  async detail(ctx) {
    const { id } = ctx.params;
    ctx.body = await ctx.service.article.query({ id: Number(id) });
  }
};