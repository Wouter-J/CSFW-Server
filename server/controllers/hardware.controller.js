const Hardware = require('../models/Hardware');
const Specs = require('../models/Specs');

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
        const hardwareProps = {
            Name: req.body.Name,
            ClientCapacity: req.body.ClientCapacity,
            ClientsSupported: req.body.ClientsSupported,
            Specifications: ['']
        }
        Hardware.create(hardwareProps, (err, data) => {
            if(err) {
                return next(err)
            } else {
                res.json(data)
            }
        });
    },
    ReadSpec(req, res, next) {
        const HardwareID = req.params.id;

        Hardware.findById(HardwareID)
            .populate('Specification')
            .orFail(() => Error('Not found'))
            .then(hardware => res.send(hardware))
            .catch(next);
    },
    AddSpec(req, res, next) {
        const HardwareID = req.params.id;
        const SpecsProps = {
            Name: req.body.Name,
            Type: req.body.Type,
            Amount: req.body.Amount,
            AmountType: req.body.AmountType,
        };
        //var newSpecID; //Variable for temporarly storing ID, can be used if wanting to switch over to ID's

        Hardware.findById(HardwareID)
            .orFail(() => Error('Not found'))
            .then(() => Specs.create(SpecsProps)) //If Hardware found, create specification
            //.then(spec => {
            //    newSpecID = spec._id;
            //})
            .then(() => Hardware.findByIdAndUpdate(HardwareID, {
                "$push": {
                    Specifications: SpecsProps,  //We could also add a reference to just the specification if collections grow too large.
                   
                }
            }))
            .catch(next);
    },
    //TODO: Add function to add existing specs to existing Hardware
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