'use strict';

/**
 * Parallax.js controller
 *
 * @description: A set of functions called "actions" for managing `Parallax`.
 */

module.exports = {

  /**
   * Retrieve parallax records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.parallax.search(ctx.query);
    } else {
      return strapi.services.parallax.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a parallax record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.parallax.fetch(ctx.params);
  },

  /**
   * Count parallax records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.parallax.count(ctx.query);
  },

  /**
   * Create a/an parallax record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.parallax.add(ctx.request.body);
  },

  /**
   * Update a/an parallax record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.parallax.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an parallax record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.parallax.remove(ctx.params);
  }
};
