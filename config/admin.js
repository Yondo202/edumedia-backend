module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '14b39f59131023e710b2af80a9f605e4'),
  },
});
