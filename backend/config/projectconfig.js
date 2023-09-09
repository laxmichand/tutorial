module.exports = {
  jwt_secret: {
    secretkey: "thisissecret",
  },
  db_connection: {
    production: {
      uri:       
        "mongodb+srv://laxmi:laxmi@cluster0.wwrwn.mongodb.net/?retryWrites=true&w=majority"
    },
    development: {
      server: "127.0.0.1:27017",
      database: "Tutorials",
    },
  },
};
