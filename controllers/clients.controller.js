const Clients = require('../models/Clients');
const Subs = require('../models/Subscriptions');

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
    Create({ body: { Name, Firstname, Lastname, Subscriptions}}, res, next){
        Subs.find({
            '_id': { $in: Subscriptions}
        }, (err, Subscriptions) => {
            if(err){
                console.log(err);
                return res.status(401).json({message: 'Something went wrong'})
            }
            Clients.create({Name, Firstname, Lastname, Subscriptions}, err => {
                if(err) { return res.status(401).json({message: 'Something went wrong'}) }
                else {
                   return res.status(200).json({message: 'Client created!'})
                }
            });
        });
    },
    Read(req, res, next) {
        const clientID = req.params.id;
        Clients.findById(clientID)
            .orFail(() => Error('Client not found'))
            .then(client => res.send(client))
            .catch(next);
    },
    Edit: ({ body: { Name, Firstname, Lastname, Subscriptions}, params: { id } }, res, next) => {
        Subs.find({
            '_id': { $in: Subscriptions}
        }, (err, Subscriptions) => {
            Clients.findByIdAndUpdate(id, {Name, Firstname, Lastname, Subscriptions})
                .orFail(() => Error('Client or subscription not found'))
                .then(client => res.status(200).json(client))
                .catch(next);
        })
    },
    Delete(req, res, next) {
        const clientID = req.params.id;

        Clients.findByIdAndDelete(clientID)
            .orFail(() => Error('Client not found'))
            .then(client => client.remove())
            .then(() => res.status(204).send({}))
            .catch(next);
    },
    //AddNewSubscription

    //AddExistingSubscription

}