require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const http = require("http");

const server = http.createServer(app);

app.get("/api", (req, res) => {
  res.send("Api working");
});
app.get("/json", (req, res) => {
  res.json({ version: "2.0", status: "Working", location : 'aws - ec2' });
});

server.listen(port, (err) => {
  if (err) return console.log("Internal Server Error!");
  console.log("Server running on port - " + port);
});

module.exports = server;