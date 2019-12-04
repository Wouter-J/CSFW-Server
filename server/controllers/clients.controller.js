let Clients = require('../models/Clients')

module.exports = {
    Index(req, res, next) {
        Clients.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
        })
    },
    Create(req, res, next) {
        const clientProps = {
            Name: req.body.Name
        }
        Clients.create(clientProps, (err, data) => {
            if(err) {
                return next(err)
            } else {
                res.json(data)
            }
        });
    },
    Read(req, res, next) {
        const clientID = req.params.id;
        Clients.findById(clientID)
            .orFail(() => Error('Client not found'))
            .then(client => res.send(client))
            .catch(next);
    },
    Edit(req, res, next) {
        const clientID = req.params.id;
        const clientProps = {
            Name: req.body.Name
        };

        Clients.findByIdAndUpdate(clientID, clientProps)
            .orFail(() => Error('Client not found'))
            .then(client => res.send(client))
            .catch(next);
    },
    Delete(req, res, next) {
        const clientID = req.params.id;

        Clients.findByIdAndDelete(clientID)
            .orFail(() => Error('Client not found'))
            .then(client => client.remove())
            .then(() => res.status(204).send({}))
            .catch(next);
    }
}