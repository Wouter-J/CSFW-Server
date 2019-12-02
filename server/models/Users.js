const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: {
        type: String
    },
    Birthdate: {
        type: Date
    },
    Role: {
        type: String,
        enum: ['User', 'Administrator'],
        default: 'User'
    }
    //TODO: Add link to Specifications Schema
})

const User = mongoose.model('User', userSchema);

module.exports = User