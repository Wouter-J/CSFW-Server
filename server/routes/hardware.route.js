const express = require('express');
var routes = express.Router();
const hardwareController = require('../controllers/hardware.controller');

/**
 * @swagger
 * /api/hardware:
 *   get:
 *     description: List all hardware items
 */
routes.get('/', hardwareController.Index);
routes.post('/create', hardwareController.Create);
routes.get('/:id', hardwareController.Read);
routes.put('/:id', hardwareController.Edit);
routes.delete('/:id', hardwareController.Delete);

module.exports = routes;