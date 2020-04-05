const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

//https://mongoosejs.com/docs/connections.html
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, //https://bit.ly/2D8WfT6
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    bufferMaxEntries: 0,
    user: process.env.USER,
    pass: process.env.PASS
};
const reconnectTimeout = 100;

mongoose.connect(process.env.mongoComplete, options, err => {
    if(err){
        console.error("Error connecting to: ", process.env.mongoUrl, error);
    } else {
        console.log("Successfully connected to ", process.env.mongoUrl);
    }
})
//Disconnect from database
mongoose.connection.on("error", error =>{
    console.log(error.toString());
    mongoose.disconnect();
});
//Try again
mongoose.connection.on("disconnected", () => {
    console.log("Unable to connect to Mongo Database");
    //setTimeout(() => connect(), reconnectTimeout);
});

module.exports = mongoose;