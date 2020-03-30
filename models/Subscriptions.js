const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    Name: {
        type: String
    },
    Costs: {
        type: Number
    }
    //TODO: Add link to Client Schema
})

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription