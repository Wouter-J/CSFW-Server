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
    Create({ body: { Name, ClientCapacity, ClientsSupported, Specifications}}, res, next){
        Specs.find({
            '_id': { $in: Specifications}
        }, (err, Specifications) => {
            if(err){
                console.log(err);
                return res.status(401).json({message: 'Something went wrong'})
            }
            Hardware.create({Name, ClientCapacity, ClientsSupported, Specifications}, err => {
                if(err) { return res.status(401).json({message: 'Something went wrong'}) }
                else {
                    res.status(200).json({message: 'Hardware created!'})
                }
            });
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
    AddNewSpec(req, res, next) {
        const HardwareID = req.params.id;
        const SpecsProps = {
            ID: '',
            Name: req.body.Name,
            Type: req.body.Type,
            Amount: req.body.Amount,
            AmountType: req.body.AmountType,
        };

        Hardware.findById(HardwareID)
            .orFail(() => Error('Not found'))
            .then(() => Specs.create(SpecsProps)) //If Hardware found, create specification
            .then(spec => {
                SpecsProps.ID = spec._id;
            })
            .then(() => Hardware.findByIdAndUpdate(HardwareID, {
                "$push": {
                    Specifications: SpecsProps,  //We could also add a reference to just the specification if collections grow too large.
                }
            }))            
            .then(() => { return res.status(201).json({ message: "Success" }) } )
            .catch(next)
            .catch((err) => { 
                res.status(500).json({ message: "Something went wrong " + err })
            });
    },
    AddExistingSpec(req, res, next) {
        const HardwareID = req.params.id;
        const SpecID    = req.body.ID;

        Hardware.findById(HardwareID)
            .orFail(() => Error('Not found'))
            .then(() => Specs.findById(SpecID))
            .then(() => Hardware.findByIdAndUpdate(HardwareID, {
                "$push": {
                    Specifications: res.spec,  //We could also add a reference to just the specification if collections grow too large.
                }
            }))
            .then(() => { return res.status(201).json({ message: "Success" }) } )
            .catch(next)
            .catch((err) => { 
                res.status(500).json({ message: "Something went wrong " + err })
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
        const specs = req.body.Specifications;
        const HardwareProps = {
            Name: req.body.Name,
            ClientCapacity: req.body.ClientCapacity,
            ClientsSupported: req.body.ClientsSupported,
            Specifications: req.body.Specifications
        };
        Specs.find({
            '_id': { $in: specs}
        }, function(err, data){
            HardwareProps.Specifications = data;
            console.log(HardwareProps);
            Hardware.findByIdAndUpdate(HardwareID, HardwareProps)
            .orFail(() => Error('Hardware not found'))
            .then(hardware => res.send(hardware))
            .catch(next);
        })
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