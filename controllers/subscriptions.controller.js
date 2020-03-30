const Subscription = require('../models/Subscriptions');

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
    Create(req, res, next) {
        const subscriptionProps = {
            Name: req.body.Name,
            Costs: req.body.Costs
        }
        Subscription.create(subscriptionProps, (err, data) => {
            if(err) {
                return next(err)
            } else {
                res.json(data)
            }
        });
    },
    Read(req, res, next) {
        const SubscriptionID = req.params.id;
        Subscription.findById(SubscriptionID)
            .orFail(() => Error('Subscription not found'))
            .then(subscription => res.send(subscription))
            .catch(next);
    },
    Edit(req, res, next) {
        const SubscriptionID = req.params.id;
        const subscriptionProps = {
            Name: req.body.Name,
            Costs: req.body.Costs
        };

        Subscription.findByIdAndUpdate(SubscriptionID, subscriptionProps)
            .orFail(() => Error('Subscription not found'))
            .then(subscription => res.send(subscription))
            .catch(next);
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