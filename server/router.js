const express = require("express");
const router = express.Router();

//Routes
const hardwareRoute = require('./routes/hardware.route');
const specsRoute = require('./routes/specs.route');
const clientsRoute = require('./routes/clients.route');
const servicesRoute = require('./routes/services.route');
const usersRoute = require('./routes/users.route');

router.use('/api/hardware', hardwareRoute);
router.use('/api/specs', specsRoute);
router.use('/api/clients', clientsRoute);
router.use('/api/services', servicesRoute);
router.use('/api/users', usersRoute);

//Catching all other requests
router.use("*", (req, res) => {
    res
      .status(404)
      .send({
        message: "404 not found"
      })
      .end();
  });
  
  module.exports = router;