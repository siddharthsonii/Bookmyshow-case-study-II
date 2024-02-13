const moviesRoutes = require('express').Router();
const bodyParser = require('body-parser');

moviesRoutes.use(bodyParser.json());

// All The Movies API

module.exports = moviesRoutes;