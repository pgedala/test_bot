var express = require('express');
var bodyParser = require('body-parser');
//Importing Mongoose library
var mongoose = require('mongoose');

var app = express();
var router = express.Router();

var port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

//Enabling CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Connecting to the MongoDB database 'test_for_db' running on 27017
mongoose.connect('mongodb://pavani:pavani@ds149278.mlab.com:49278/sales_db');


//import routes
require('./app/routes/convo_routes')(app, router);
require('./app/routes/bot_routes')(app, router);

//server is running on port
app.listen(port);
console.log("Server started at: " + port);
