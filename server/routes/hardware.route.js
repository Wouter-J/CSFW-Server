const express = require('express');
var routes = express.Router();
const hardwareController = require('../controllers/hardware.controller');

routes.get('/', hardwareController.Index);
routes.post('/create', hardwareController.Create);
routes.get('/:id', hardwareController.Read);
routes.put('/:id', hardwareController.Edit);
routes.delete('/:id', hardwareController.Delete);

//Temp test
routes.get('/test', hardwareController.Test);
routes.post('/login', hardwareController.Login);

module.exports = routes;