const express = require('express');
var routes = express.Router();
const hardwareController = require('../controllers/hardware.controller');

routes.get('/', hardwareController.Index);
routes.post('/create', hardwareController.Create);
routes.get('/:id', hardwareController.Read);
routes.put('/:id', hardwareController.Edit);
routes.delete('/:id', hardwareController.Delete);

module.exports = routes;