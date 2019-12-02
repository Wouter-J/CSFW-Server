const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const hardwareSchema = new Schema({
    Name: {
        type: String
    },
    ClientCapacity: {
        type: Number
    },
    ClientsSupported: {
        type: Number
    }
    //TODO: Add link to Specifications Schema
})

const Hardware = mongoose.model('Hardware', hardwareSchema);

module.exports = Hardware