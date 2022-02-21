'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('quill-editor')
      .service('myService')
      .getWelcomeMessage();
  },
};
