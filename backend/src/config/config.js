const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.NODE_ENV,
  port: process.env.PORT
};