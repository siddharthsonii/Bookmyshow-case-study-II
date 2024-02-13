const bookingRoutes = require('express').Router();
const bodyParser = require('body-parser');

bookingRoutes.use(bodyParser.json());

// All The Booking API

module.exports = bookingRoutes;