let express = require('express'),
	path = require('path'),
	mongoose = require('mongoose'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	dbConfig = require('./db/db') //TODO: replace this with dotenv config file
	swaggerUi = require('swagger-ui-express'),
	swaggerJSDoc = require('swagger-jsdoc')
const app = express()

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
})
//Express JS
const hardwareRoute = require('../server/routes/hardware.route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/client')));
app.use('/', express.static(path.join(__dirname, 'dist/client')));
app.use('/api', hardwareRoute)

//Port
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
	console.log("Connected to port: " + port)
})

//Send 404 to error handler
// app.use((req,res,next) => {
// 	next(createError(404));
// })

app.use(function (err, req, res, next) {
	console.error(err.message); 
	if (!err.statusCode) err.statusCode = 500;
	res.status(err.statusCode).send(err.message); 
});

/*
app.listen(process.env.PORT || 5000, () => { 
	if(process.env.PORT !== undefined){
		console.log('Server gestart op poort '+process.env.PORT); 
	} else {
		console.log('Server gestart op poort 5000'); 
	}
});

app.get('*', (req, res) => {
	res.status(200).send({
		message: 'Application is running'
	}).end();
})
*/
module.exports = app;