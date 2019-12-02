const express = require('express');
var routes = express.Router();
const hardwareController = require('../controllers/hardware.controller');

routes.post('/create', hardwareController.Create);
routes.get('/', hardwareController.Index);

module.exports = routes;