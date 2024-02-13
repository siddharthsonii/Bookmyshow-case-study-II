// server.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require("express").Router();

const theatersRouter = require('../src/routes/theaters');
const datesRouter = require('../src/routes/dates');
const moviesRouter = require('../src/routes/movies');
const bookingsRouter = require('../src/routes/bookings');

const app = express();

app.use(routes);
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Bookmyshow API");
});

routes.use('/api/theaters', theatersRouter);
routes.use('/api/dates', datesRouter);
routes.use('/api/movies', moviesRouter);
routes.use('/api/bookings', bookingsRouter);

app.listen(PORT, (err) => {
  if(!err) {
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log("Server is not running due to an error.");
  }
});
