const User = require('../models/Users')
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
        const username = req.body.username;
        const pwd = req.body.password;
        console.log(username + pwd)
        var DBusername = '';
        var DBpwd = '';

        //Get user from DB
        //TODO: Use hashes for passwords
        User.findOne({ Name: username, Password: pwd}, (err, data) => {
            if(err) {
                return next(err)
            } else {
                //TODO: Use better names
                DBusername = username;
                DBpwd = pwd;
                console.log("Yeeet: " + DBusername + DBpwd)
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
        }).catch(next)
    },
    Register(req, res, next) {
        console.log("Server register called")
        const userProps = {
            Name: req.body.username,
            Password: req.body.password,
            Role: 'User'
        }
        console.log(userProps.Name)
        console.log(userProps.Password)
        User.create(userProps, (err, data) => {
            if(err) {
                return next(err)
            } else {
                res.json(data)
            }
        });
    }
}