// import express from 'express' -> is2015 modules system is not supported by node
// (on the react side we will and can use the is2015 module system)

// common js modules -> sharing code between files
const express = require('express');
// we don't return anything from it, so there is no need for assigning a variable
require('./services/passport');

/* import authRoutes file -> one way of doing it
const authRoutes = require('./routes/authRoutes');
authRoutes(app);
*/

// represent running express app -> builds up the connection between express and node and routes the requests to different handlers
const app = express();

// authRoutes function with app as parameter
require('./routes/authRoutes')(app);

// Heroku tells us which port to use, so we make this dynamic
// inject the environment variable comming from Heroku
// we have to handle the development mode by ourselfs -> 5000
const PORT = process.env.PORT || 5000;
console.log('Emaily server listens on port: ' + PORT);
app.listen(PORT);
