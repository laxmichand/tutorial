const dotenv = require('dotenv');
dotenv.config();

function getEnvironmentVariable(name, defaultValue = undefined) {
  const value = process.env[name];
  if (!value && defaultValue !== undefined) {
    console.warn(`Warning: ${name} environment variable is not defined. Using default value: ${defaultValue}`);
  } else if (!value) {
    console.error(`Error: ${name} environment variable is not defined.`);
    process.exit(1);
  }
  return value || defaultValue;
}

module.exports = {
  endpoint: getEnvironmentVariable('NODE_ENV'),
  port: getEnvironmentVariable('PORT', 8800), // Provide a default port if not defined
};
