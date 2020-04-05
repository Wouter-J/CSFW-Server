const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    Name: {
        type: String
    },
    Firstname: {
        type: String
    },
    Lastname: {
        type: String
    },
    Subscriptions: [{
        type: Schema.Types.Mixed,
        ref: 'Subscription'
    }]
})

const Client = mongoose.model('Client', clientSchema);

module.exports = Client