const express = require('express');
var routes = express.Router();
const clientsController = require('../controllers/clients.controller');

routes.get('/', clientsController.Index);
routes.post('/create', clientsController.Create);
routes.get('/:id', clientsController.Read);
routes.put('/:id', clientsController.Edit);
routes.delete('/:id', clientsController.Delete);

module.exports = routes;