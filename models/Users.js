const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: {
        type: String
    },
    Firstname: {
        type: String
    },
    Lastname: {
        type: String
    },
    Password: { //TODO: Add bcrypt hash
        type: String
    },
    Role: {
        type: String,
        enum: ['User', 'Administrator'],
        default: 'User'
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User