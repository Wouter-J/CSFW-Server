const express = require('express');
const routes = express.Router();
const usersController = require('../controllers/users.controller');

routes.get('/', usersController.Index);
routes.post('/create', usersController.Register);
routes.get('/:id', usersController.Read);
routes.put('/:id', usersController.Edit);
//routes.delete('/:id', usersController.Delete);

routes.post('/', usersController.Login);
routes.post('/register', usersController.Register);

module.exports = routes;