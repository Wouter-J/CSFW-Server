const User = require('../models/Users')
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {
    //Create
    Register(req, res, next) {
        console.log("Server register called")
        const userProps = {
            Username: req.body.Username,
            Firstname: req.body.Firstname,
            Lastname: req.body.Lastname,
            Password: req.body.Password,
            Role: 'User'
        }
        console.log(userProps.Username)
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
              console.log(data);
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
            Username: req.body.Username,
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
        const Username = req.body.Username;
        const pwd = req.body.Password;
        console.log(Username + pwd)
        var DBusername = '';
        var DBpwd = '';

        //Get user from DB
        //TODO: Use hashes for passwords
        User.findOne({ Username: Username, Password: pwd}, (err, data) => {
            if(err) {
                return next(err)
            } else {
                //TODO: Use better names
                DBusername = Username;
                DBpwd = pwd;
                if (Username && pwd) {
                    if (Username === DBusername && pwd === DBpwd) { //verify Username & pwd with db, assume it's correct for now
                        let token = jwt.sign({Username: Username},
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
                        message: 'Incorrect Username or Password'
                      }); }
                } else { res.send(400).json({
                    success: false,
                    message: 'Authentication failed! Please check the request'
                  });}
            }
        }).catch(next)
    }
}