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
    },
    Specifications: {
        type: Schema.Types.ObjectId,
        ref: 'Specification'
    }
})

const Hardware = mongoose.model('Hardware', hardwareSchema);

module.exports = Hardware