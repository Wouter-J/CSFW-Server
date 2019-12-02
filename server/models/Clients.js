const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    Name: {
        type: String
    }
    //TODO: Add link to Products & Services
})

const Client = mongoose.model('Client', clientSchema);

module.exports = Client