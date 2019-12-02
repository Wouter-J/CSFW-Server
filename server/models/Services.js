const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    Name: {
        type: String
    },
    Costs: {
        type: Number
    }
    //TODO: Add link to Client Schema
})

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service