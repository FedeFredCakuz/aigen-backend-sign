'use strict';

/**
 * test-cazzo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-cazzo.test-cazzo');
