const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL,
  NODE_ENV:process.env.NODE_ENV
};
