const User = require('../models/Users')
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    //Create
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
    },
    //Read All
    Index(req, res, next) {
        User.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
        })
    },
    //Read One
    Read(req, res, next) {
        const UserID = req.params.id;
        User.findById(UserID)
            .orFail(() => Error('User not found'))
            .then(user => res.send(user))
            .catch(next);
    },
    //Update
    Edit(req, res, next) {
        const UserID = req.params.id;
        const userProps = {
            Name: req.body.username,
            Firstname: req.body.firstname,
            Lastname: req.body.lastname
        };

        User.findByIdAndUpdate(UserID, userProps)
            .orFail(() => Error('User not found'))
            .then(user => res.send(user))
            .catch(next);
    },
    //Login
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
    }
}