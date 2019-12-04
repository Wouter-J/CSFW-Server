let Service = require('../models/Services');

//TODO: Finish crud functionalities
module.exports = {
    Index(req, res, next) {
        Service.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
        })
    },
    Create(req, res, next) {
        const serviceProps = {
            Name: req.body.Name,
            Costs: req.body.Costs
        }
        Service.create(serviceProps, (err, data) => {
            if(err) {
                return next(err)
            } else {
                res.json(data)
            }
        });
    },
    Read(req, res, next) {
        const ServiceID = req.params.id;
        Service.findById(ServiceID)
            .orFail(() => Error('Service not found'))
            .then(service => res.send(service))
            .catch(next);
    },
    Edit(req, res, next) {
        const ServiceID = req.params.id;
        const serviceProps = {
            Name: req.body.Name,
            Costs: req.body.Costs
        };

        Service.findByIdAndUpdate(ServiceID, serviceProps)
            .orFail(() => Error('Service not found'))
            .then(service => res.send(service))
            .catch(next);
    },
    Delete(req, res, next) {
        const ServiceID = req.params.id;

        Service.findByIdAndDelete(ServiceID)
            .orFail(() => Error('Service not found'))
            .then(service => service.remove())
            .then(() => res.service(204).send({}))
            .catch(next);
    }
}