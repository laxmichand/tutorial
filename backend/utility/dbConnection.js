let mongoose = require("mongoose");
const { endpoint } = require("../config/config");
const dbConn = require("../config/projectconfig").db_connection;

if (endpoint === "development") {
  var url = `mongodb://${dbConn.development.server}/${dbConn.development.database}`;
} else {
  var url = `mongodb+srv://laxmi:laxmi@cluster0.wwrwn.mongodb.net/?retryWrites=true&w=majority`;
}

class Database {
  constructor() {
    this._connect();
  }
   _connect() {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error", err);
      });
  }
}
module.exports = new Database();