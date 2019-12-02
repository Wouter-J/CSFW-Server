const express = require('express');
var routes = express.Router();
const servicesController = require('../controllers/services.controller');

routes.get('/', servicesController.Index);
routes.post('/create', servicesController.Create);
routes.get('/:id', servicesController.Read);
routes.put('/:id', servicesController.Edit);
routes.delete('/:id', servicesController.Delete);

module.exports = routes;