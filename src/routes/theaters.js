const theatersRoutes = require('express').Router();
const bodyParser = require('body-parser');

theatersRoutes.use(bodyParser.json());

// All The Theaters API

module.exports = theatersRoutes;