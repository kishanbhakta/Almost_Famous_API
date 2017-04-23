//call the packages needed
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//configure app to use bodyParser()
//get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//set port
var port = process.env.PORT || 8080;

//Routes for API
//get an instance of express router
var router = express.Router();

//test route to make sure everthing is working
router.get('/', function(req, res){
  res.json({ message: 'This is Almost Famous API'});
});

//add more routes here


//register routes
// all routes will be prefixed /api
app.use('/api', router);

//start the server
app.listen(port);
console.log('Things are happening on port ' +  port);