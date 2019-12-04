let Hardware = require('../models/Hardware');
require('dotenv').config();
const jwt = require('jsonwebtoken');
//TODO: Finish crud functionalities
module.exports = {
    Index(req, res, next) {
        Hardware.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
        })
    },
    Create(req, res, next) {
        Hardware.create(req.body, (err, data) => {
            if(err) {
                return next(err)
            } else {
                res.json(data)
            }
        });
    },
    Read(req, res, next) {
        const HardwareID = req.params.id;
        Hardware.findById(HardwareID)
            .orFail(() => Error('Hardware not found'))
            .then(hardware => res.send(hardware))
            .catch(next);
    },
    Edit(req, res, next) {
        const HardwareID = req.params.id;
        const HardwareProps = {
            Name: req.body.Name,
            ClientCapacity: req.body.ClientCapacity,
            ClientsSupported: req.body.ClientsSupported
        };

        Hardware.findByIdAndUpdate(HardwareID, HardwareProps)
            .orFail(() => Error('Hardware not found'))
            .then(hardware => res.send(hardware))
            .catch(next);
    },
    Delete(req, res, next) {
        const HardwareID = req.params.id;

        Hardware.findByIdAndDelete(HardwareID)
            .orFail(() => Error('Hardware not found'))
            .then(hardware => hardware.remove())
            .then(() => res.status(204).send({}))
            .catch(next);
    },
    Test(req, res, next) {
        res.json({
            success: true,
            message: 'Index page'
        });
    },
    Login(req, res, next) {
        //Mock username for now
        const username = req.body.username;
        const pwd = req.body.pwd;
        console.log(username + pwd)
        const DBusername = 'admin';
        const DBpwd = 'pwd';
        if (username && pwd) {
            if (username === DBusername && pwd === DBpwd) { //verify username & pwd with db, assume it's correct for now
                let token = jwt.sign({username: username},
                process.env.secretToken,
                { expiresIn: '24h' }) //token duration is 24h
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