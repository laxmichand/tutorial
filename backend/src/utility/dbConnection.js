const mongoose = require("mongoose");
const { endpoint } = require("../config/config");
const { db_connection } = require("../config/projectconfig");

const getDatabaseUrl = () => {
  if (endpoint === "development") {
    return `mongodb://${db_connection.development.server}/${db_connection.development.database}`;
  } else {
    return `mongodb+srv://laxmi:laxmi@cluster0.wwrwn.mongodb.net/?retryWrites=true&w=majority`;
  }
};
class Database {
  constructor() {
    this.url = getDatabaseUrl();
    this._connect();
  }
  async _connect() {
    try {
      console.log('db url',this.url);
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
