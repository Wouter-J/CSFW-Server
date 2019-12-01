//TODO: Update with content over at https://gitlab.com/avans-informatica-breda/programmeren/clientside-frameworks/angular-gitlab-heroku/blob/master/src/server.js
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/client'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/client/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);