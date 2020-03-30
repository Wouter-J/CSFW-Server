const express = require('express');
var routes = express.Router();
const subscriptionsController = require('../controllers/subscriptions.controller');

routes.get('/', subscriptionsController.Index);
routes.post('/create', subscriptionsController.Create);
routes.get('/:id', subscriptionsController.Read);
routes.put('/:id', subscriptionsController.Edit);
routes.delete('/:id', subscriptionsController.Delete);

module.exports = routes;