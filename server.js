const express = require("express");
const path = require('path');
var cors = require('cors');
const helmet = require('helmet'); // Import the helmet middleware


const app = express();

app.use((express.json({ limit: "30mb", extended: true})))
app.use((express.urlencoded({ limit: "30mb", extended: true})))
app.use((cors()));
app.use(helmet()); // Use the helmet middleware to enhance security

const tutRouter = require('./backend/src/routes/tutorials.route');
app.use("/tutorials", tutRouter);

const { port, endpoint } = require("./backend/src/config/config");
require('./backend/src/utility/dbConnection');

console.log("env running =>", endpoint);

app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get(['*'], (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/frontend/build" });
});

app.listen(`${port}`, function () {
  console.log(
    "server deployed on http://%s:%s",
    this.address().address,
    this.address().port
  );
});