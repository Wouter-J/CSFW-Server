const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    Name: {
        type: String
    },
    Costs: {
        type: Number
    },
    Hardwares: [{
        type: Schema.Types.Mixed,
        ref: 'Hardware'
    }]
})

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription