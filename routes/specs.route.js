const express = require('express');
var routes = express.Router();
const specsController = require('../controllers/specs.controller');

routes.get('/', specsController.Index);
routes.post('/create', specsController.Create);
routes.get('/:id', specsController.Read);
routes.put('/:id', specsController.Edit);
routes.delete('/:id', specsController.Delete);

module.exports = routes;