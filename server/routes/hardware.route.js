const express = require('express');
const app = express();
const hardwareRoute = express.Router();

//TODO: Split this logic to a controller
let Hardware = require('../models/Hardware')

//TODO: Finish crud functionalities
//Create
hardwareRoute.route('/create').post((req, res, next) => {
    Hardware.create(req.body, (err, data) => {
        if(err) {
            return next(err)
        } else {
            res.json(data)
        }
    })
})
//Index
hardwareRoute.route('/').get((req, res) => {
    Hardware.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
})

module.exports = hardwareRoute;