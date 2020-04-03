const Subscription = require('../models/Subscriptions');
const Hardware = require('../models/Hardware');

//TODO: Finish crud functionalities
module.exports = {
    Index(req, res, next) {
        Subscription.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
        })
    },
    Create({body: {Name, Costs, Hardwares}}, res) {
        Hardware.find({
            '_id': { $in: Hardwares}
        }, (err, Hardwares) => {
            if(err) {
                console.log(err);
                return res.status(401).json({ message: 'Something went wrong'})
            }
            Subscription.create({Name, Costs, Hardwares}, err, data => {
                if(err) { return res.status(401).json({ message: 'Something went wrong' }) }
                res.status(200).json({message: 'Subscription created'})
            });
        })
    },
    Read(req, res, next) {
        const SubscriptionID = req.params.id;
        Subscription.findById(SubscriptionID)
            .orFail(() => Error('Subscription not found'))
            .then(subscription => res.send(subscription))
            .catch(next);
    },
    Edit({body: {Name, Costs, Hardwares}, params: { id }}, res, next) {
        Hardware.find({
            '_id': { $in: Hardwares}
        }, (err, Hardwares) => {
            Subscription.findByIdAndUpdate(id, {Name, Costs, Hardwares})
                .orFail(() => Error('Subscription or Hardware not found'))
                .then(hardware => res.status(200).json(hardware))
                .catch(next);
        })
    },
    Delete(req, res, next) {
        const SubscriptionID = req.params.id;

        Subscription.findByIdAndDelete(SubscriptionID)
            .orFail(() => Error('Subscription not found'))
            .then(subscription => subscription.remove())
            .then(() => res.status(204).send({}))
            .catch(next);
    }
}