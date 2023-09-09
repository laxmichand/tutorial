const express = require("express");
const app = express();
const path = require('path');
var cors = require('cors');
app.use(cors())
const jsonParser = express.json()
app.use(jsonParser);
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get(["/"], (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/frontend/build" });
});

app.post('/tutorials/add', (req, res) => {
  console.log(req.body);
  res.send({data:'sucsess'});
})

app.get('/tutorials/getall', (req, res) => {
  res.send({

    "tutorials": [

      {

        "id": 123243323,

        "title": "Learn React",

        "description": "React Learning",

        "published": false

      },

      {

        "id": 23423423423,

        "title": "Learn Redux",

        "description": "Redux Learning",

        "published": true

      }

    ]

  })
})

app.listen(9900, function () {
  console.log("server")
});
