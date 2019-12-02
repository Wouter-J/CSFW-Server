
let Hardware = require('../models/Hardware')
//TODO: Finish crud functionalities
//Create

module.exports = {
    Create(req, res, next) {
        Hardware.create(req.body, (err, data) => {
            if(err) {
                return next(err)
            } else {
                res.json(data)
            }
        });
    },
    Index(req, res, next) {
        Hardware.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
        })
    }
}