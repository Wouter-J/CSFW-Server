const express = require("express");
const router = express.Router();
const authMiddleware = require('./middleware/auth');

//Routes
const hardwareRoute = require('./routes/hardware.route');
const specsRoute = require('./routes/specs.route');
//const clientsRoute = require('./routes/clients.route');
//const servicesRoute = require('./routes/services.route');
//const usersRoute = require('./routes/users.route');

router.use('/api/hardware', hardwareRoute);
router.use('/api/specs', specsRoute);
//router.use('/api/clients', clientsRoute);
//router.use('/api/services', servicesRoute);
//router.use('/api/users', usersRoute);

//Catching all other requests
/*
router.use("*", (req, res) => {
    res
      .status(404)
      .send({
        message: "404 not found"
      })
      .end();
});
*/

router.use("/tokens",authMiddleware, hardwareRoute);
router.use("/login", hardwareRoute);
//JWTToken
var jwt = require("jsonwebtoken")
router.use('/token', (req, res) => {
	let token = jwt.sign({ 
		email : "testmail@mail.com",
		_id : "1234",
		role : "User",
	},
		"secretKey", 
	{ expiresIn : '24h' }
	);
	console.log(token)
	res.status(200).json({
		success : true,
		message : "Auth ok",
		token : token
	})
})

module.exports = router;