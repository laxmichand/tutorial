const mongoose = require("mongoose");
const { endpoint } = require("../config/config");
const { db_connection } = require("../config/projectconfig");

class Database {
  constructor() {
    this.url = this.getDatabaseUrl();
    this.connect();
  }

  getDatabaseUrl() {
    const config = endpoint === "development"
      ? db_connection.development
      : db_connection.production;
      
    return `mongodb://${config.server}/${config.database}`;
  }

  async connect() {
    try {
      console.log('Connecting to the database:', this.url);
      await mongoose.connect(this.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connection successful");
    } catch (err) {
      console.error("Database connection error", err);
      process.exit(1); // Exit the application on connection error
    }
  }
}

module.exports = new Database();
