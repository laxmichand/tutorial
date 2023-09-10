const express = require("express");
const path = require("path");
const cors = require("cors");

const winston = require('winston');
const morgan = require('morgan');

const { port, endpoint } = require("./backend/config/config");
const dbConn = require("./backend/utility/dbConnection");
const tutRouter = require("./backend/routes/tutorials.route");

const app = express();

// Middleware
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, "frontend/build")));

// Routes
app.use("/tutorials", tutRouter);

// Send the main HTML file for root and /tutorials routes
app.get(["/", "/tutorials"], (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "frontend/build") });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("Environment: ", endpoint);
});
