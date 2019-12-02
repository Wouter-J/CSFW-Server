const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    Name: {
        type: String
    }
    //TODO: Add link to Products & Services
})

const Client = mongoose.model('Client', clientSchema);

module.exports = Client