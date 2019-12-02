const 	express = require('express');
const	path = require('path');
const	mongoose = require('mongoose');
const	cors = require('cors');
const	bodyParser = require('body-parser');
const	dbConfig = require('./db/db'); //TODO: replace this with dotenv config file
const	swaggerUi = require('swagger-ui-express');
const	swaggerJSDoc = require('swagger-jsdoc');
const 	app = express();
const 	router = require('./router');

//Swagger document definition
const options = {
	definition: {
		info: {
			version: 1.0, // Version (Req)
			title: "CSFW", // Title (Req)
			description: "API for CSFW"
		}
	},
	//Path to API docs 
	apis: ["./routes/*"]
}
//Initialize swagger-js doc
const swaggerSpec = swaggerJSDoc(options);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//MongoDB Connection
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
	useNewUrlParser: true
}).then(() => {
	console.log("MongoDB connected")
}, error => {
	console.log("MongoDB connection error: " + error)
	//TODO: Add retry
})

//Express JS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/client')));
app.use('/', express.static(path.join(__dirname, 'dist/client')));
app.use(router)

//Port
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
	console.log("Connected to port: " + port)
})

app.use(function (err, req, res, next) {
	console.error(err.message); 
	if (!err.statusCode) { err.statusCode = 500; } 
	res.status(err.statusCode).send(err.message); 
});

app.get('*', (req, res) => {
	res.status(200).send({
		message: 'Application is running'
	}).end();
})

module.exports = app;