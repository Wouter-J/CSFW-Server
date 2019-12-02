let Hardware = require('../models/Hardware')
//TODO: Finish crud functionalities
module.exports = {
    Index(req, res, next) {
        Hardware.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
        })
    },
    Create(req, res, next) {
        Hardware.create(req.body, (err, data) => {
            if(err) {
                return next(err)
            } else {
                res.json(data)
            }
        });
    },
    Read(req, res, next) {
        const HardwareID = req.params.id;
        Hardware.findById(HardwareID)
            .orFail(() => Error('Hardware not found'))
            .then(hardware => res.send(hardware))
            .catch(next);
    },
    Edit(req, res, next) {
        const HardwareID = req.params.id;
        const HardwareProps = {
            Name: req.body.Name,
            ClientCapacity: req.body.ClientCapacity,
            ClientsSupported: req.body.ClientsSupported
        };

        Hardware.findByIdAndUpdate(HardwareID, HardwareProps)
            .orFail(() => Error('Hardware not found'))
            .then(hardware => res.send(hardware))
            .catch(next);
    },
    Delete(req, res, next) {
        const HardwareID = req.params.id;

        Hardware.findByIdAndDelete(HardwareID)
            .orFail(() => Error('Hardware not found'))
            .then(hardware => hardware.remove())
            .then(() => res.status(204).send({}))
            .catch(next);
    }
}