const express = require('express');
var routes = express.Router();
const hardwareController = require('../controllers/hardware.controller');
const specsController = require('../controllers/specs.controller');

//Hardware routes
routes.get('/', hardwareController.Index);
routes.post('/create', hardwareController.Create);
routes.get('/:id', hardwareController.Read);
routes.put('/:id', hardwareController.Edit);
routes.delete('/:id', hardwareController.Delete);

//Spec routes
routes.get('/', specsController.Index);
routes.post('/create', specsController.Create);
routes.get('/:id', specsController.Read);
routes.put('/:id', specsController.Edit);
routes.delete('/:id', specsController.Delete);

module.exports = routes;