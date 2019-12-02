const express = require('express');
var routes = express.Router();
const usersController = require('../controllers/users.controller');

routes.get('/', usersController.Index);
routes.post('/create', usersController.Create);
routes.get('/:id', usersController.Read);
routes.put('/:id', usersController.Edit);
routes.delete('/:id', usersController.Delete);

module.exports = routes;