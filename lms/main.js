var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// parse application/x-www-form-urlencoded
//security and limited amount of characters (ASCII only) for the url
//extended false = receive an encoded one and not using sophisticated algorithm
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// parse application/json
// parse body for the client and parse it into a javascript object
// when retrieving a response, want to create as a json object
app.use(bodyParser.json());

//requiring controllers to look for endpoint
app.use(require('./controllers/bookController'));
//requiring controllers
app.use(require('./controllers/authorController'));

app.listen(3000); //default is local host
console.log('Server running in port: 3000...');