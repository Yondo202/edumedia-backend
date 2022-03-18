module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1380),
  url: "https://edumedia.mn/api",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
