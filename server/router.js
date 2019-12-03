const express = require("express");
const router = express.Router();

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

router.use("/token-test", function(req, res, next){
	let token = req.headers['authorization'] || req.headers['x-access-token']
	if(token && token.startsWith("Bearer ")){
		token = token.slice(7, token.length)
		jwt.verify(token, secretKey, (err, decoded) => {
		  if(err){
			  res.status(401).json({
				  result : false,
				  message : "Token invalid"
			  })
		  } 
		  else {
			 next()
		  }
		}) 
	} else {
		res.status(400).json({
			result : false,
			message : "Token missing"
		})
	}
})

//JWTToken
var jwt = require("jsonwebtoken")
router.use('/token', (req, res) => {
	let token = jwt.sign({ 
	email : "testmail@mail.com",
	_id : "1234",
	role : "User",
	},
	"secretKey", 
	{ expiresIn : '7d' }
	)
	res.status(200).json({
	success : true,
	message : "Auth ok",
	token : token
	})
})

module.exports = router;