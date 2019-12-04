let Users = require('../models/Users')
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    //TODO: Add Crud functions
    Test(req, res, next) {
        res.json({
            success: true,
            message: 'Index page'
        });
    },
    Login(req, res, next) {
        //Mock username for now
        const username = req.body.username;
        const pwd = req.body.password;
        console.log(username + pwd)
        const DBusername = 'admin';
        const DBpwd = 'pwd';
        if (username && pwd) {
            if (username === DBusername && pwd === DBpwd) { //verify username & pwd with db, assume it's correct for now
                let token = jwt.sign({username: username},
                process.env.secretToken,
                { expiresIn: '24h' }) //token duration is 24h
                req.headers.authorization = token; // Not best practice
                res.json({
                    success: true,
                    message: 'Auth succesful',
                    token: token
                })
            } else { res.send(403).json({
                success: false,
                message: 'Incorrect username or password'
              }); }
        } else { res.send(400).json({
            success: false,
            message: 'Authentication failed! Please check the request'
          });}
    }
}