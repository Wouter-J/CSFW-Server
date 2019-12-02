const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hardwareSchema = new Schema({
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