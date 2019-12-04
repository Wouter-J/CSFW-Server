const jwt = require('jsonwebtoken');
require('dotenv').config();
//By using => we have no need of ,function()
const tokenAuth = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; //Express headers
    console.log(token)
    if (token.startsWith('Bearer')) {
        token = token.slice(7, token.length) // Renove Bearer from string
    }

    if(token) {
        console.log(token)
        jwt.verify(token, process.env.secretToken, (err, decoded) => {
            if(err) {
                return res.json({
                    success: false,
                    message: "Token is invalid"
                })
            } else {
                req.decoded = decoded;
                console.log(decoded);
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};

module.exports = tokenAuth;