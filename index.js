// import express from 'express' -> is2015 modules system is not supported by node
// (on the react side we will and can use the is2015 module system)

// common js modules -> sharing code between files
const express = require("express");

// represent running express app -> builds up the connection between express and node and routes the requests to different handlers
const app = express();

// route handler
app.get("/", (req, res) => {
  res.send({ hi: "heroku rules" });
});

// Heroku tells us which port to use, so we make this dynamic
// inject the environment variable comming from Heroku
// we have to handle the development mode by ourselfs -> 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
