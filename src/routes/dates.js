const datesRoutes = require('express').Router();
const bodyParser = require('body-parser');

datesRoutes.use(bodyParser.json());

// All The Dates API

module.exports = datesRoutes;