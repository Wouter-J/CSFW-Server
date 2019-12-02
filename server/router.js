const express = require("express");
const router = express.Router();

//Routes
const hardwareRoute = require('./routes/hardware.route');

router.use('/api', hardwareRoute);

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