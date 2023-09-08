const express = require("express");
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get(["/"], (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/frontend/build" });
});

app.listen(9900, function () {
    console.log("server")
});
