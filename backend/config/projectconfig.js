// Exported configuration object for database connections
module.exports = {
  db_connection: {
    // Production database connection details
    production: {
      uri: "mongodb+srv://laxmi:laxmi@cluster0.wwrwn.mongodb.net/?retryWrites=true&w=majority",
    },
    // Development database connection details
    development: {
      server: "127.0.0.1:27017", // Server address and port for development
      database: "Tutorials",    // Database name for development
    },
  },
};
