'use strict';
// const schema = require("../content-types/home/schema.json");
// const createPopulatedController = require("../../../helpers/populate")

/**
 *  home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home.home');
// module.exports = createPopulatedController('api::home.home', schema);



// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::home.home', ({ strapi }) => ({
//     async find(ctx) {
//         const { query } = ctx;

//         const entity = await strapi.entityService.findMany('api::home.home', {
//             ...query,
//             populate: {
//                 header: {
//                     populate: {
//                         img: true
//                     }
//                 },
//                 sidebar: {
//                     populate: {
//                         img: true, links: {
//                             populate: {
//                                 icon: true
//                             }
//                         }
//                     }
//                 },
//             },
//         });
//         const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

//         return this.transformResponse(sanitizedEntity);

//     }
// }));