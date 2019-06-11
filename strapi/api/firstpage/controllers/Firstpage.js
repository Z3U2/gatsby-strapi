'use strict';

/**
 * Firstpage.js controller
 *
 * @description: A set of functions called "actions" for managing `Firstpage`.
 */

module.exports = {

  /**
   * Retrieve firstpage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.firstpage.search(ctx.query);
    } else {
      return strapi.services.firstpage.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a firstpage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.firstpage.fetch(ctx.params);
  },

  /**
   * Count firstpage records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.firstpage.count(ctx.query);
  },

  /**
   * Create a/an firstpage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.firstpage.add(ctx.request.body);
  },

  /**
   * Update a/an firstpage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.firstpage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an firstpage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.firstpage.remove(ctx.params);
  }
};
