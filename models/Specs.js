const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const specifcationSchema = new Schema({
    Name: {
        type: String
    },
    Type: {
        type: String
    },
    Amount: {
        type: Number
    },
    AmountType: {
        type: String,
        enum: ['GB', 'TB', 'Other'],
        default: 'GB'
    }
})

const Specification = mongoose.model('Specification', specifcationSchema);

module.exports = Specification