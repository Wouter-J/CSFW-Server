const express = require('express');
var routes = express.Router();
const usersController = require('../controllers/users.controller');

//routes.get('/', usersController.Index);
//routes.post('/create', usersController.Create);
//routes.get('/:id', usersController.Read);
//routes.put('/:id', usersController.Edit);
//routes.delete('/:id', usersController.Delete);

//Temp test
routes.get('/', usersController.Test);
routes.post('/', usersController.Login);
routes.post('/register', usersController.Register);

module.exports = routes;