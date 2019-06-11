'use strict';

/**
 * Quote.js controller
 *
 * @description: A set of functions called "actions" for managing `Quote`.
 */

module.exports = {

  /**
   * Retrieve quote records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.quote.search(ctx.query);
    } else {
      return strapi.services.quote.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a quote record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.quote.fetch(ctx.params);
  },

  /**
   * Count quote records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.quote.count(ctx.query);
  },

  /**
   * Create a/an quote record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.quote.add(ctx.request.body);
  },

  /**
   * Update a/an quote record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.quote.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an quote record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.quote.remove(ctx.params);
  }
};
