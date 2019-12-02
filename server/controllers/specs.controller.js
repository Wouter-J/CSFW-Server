let Specs = require('../models/Specs')

module.exports = {
    Index(req, res, next) {
        Specs.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
        })
    },
    Create(req, res, next) {
        Specs.create(req.body, (err, data) => {
            if(err) {
                return next(err)
            } else {
                res.json(data)
            }
        });
    },
    Read(req, res, next) {
        const SpecsID = req.params.id;
        Specs.findById(SpecsID)
            .orFail(() => Error('Specs not found'))
            .then(specs => res.send(specs))
            .catch(next);
    },
    Edit(req, res, next) {
        const SpecsID = req.params.id;
        const SpecsProps = {
            Name: req.body.Name,
            Type: req.body.Type,
            Amount: req.body.Amount,
            AmountType: req.body.AmountType,
        };

        Specs.findByIdAndUpdate(SpecsID, SpecsProps)
            .orFail(() => Error('Specs not found'))
            .then(specs => res.send(specs))
            .catch(next);
    },
    Delete(req, res, next) {
        const SpecsID = req.params.id;

        Specs.findByIdAndDelete(SpecsID)
            .orFail(() => Error('Specs not found'))
            .then(specs => specs.remove())
            .then(() => res.status(204).send({}))
            .catch(next);
    }
}