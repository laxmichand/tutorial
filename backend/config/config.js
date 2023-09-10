// Import the dotenv library to load environment variables from a .env file
const dotenv = require('dotenv');

// Load environment variables from the .env file into process.env
dotenv.config();

// Export environment-related configuration
module.exports = {
  // Retrieve the value of the NODE_ENV environment variable and assign it to 'endpoint'
  endpoint: process.env.NODE_ENV,
  
  // Retrieve the value of the PORT environment variable and assign it to 'port'
  port: process.env.PORT
};
