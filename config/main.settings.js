require("dotenv").config();
module.exports = {
  server: {
    port: process.env.APPLICATION_PORT,
  },
  database: {
    development: {
      database: process.env.DEV_DB,
      username: process.env.DEV_USER,
      password: process.env.DEV_PASSWORD,
      host: process.env.DEV_HOST,
      dialect: "mysql",
      logging: false,
    },
    production: {},
  },
};
