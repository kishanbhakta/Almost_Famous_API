//call the packages needed
var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
    mongoose.connect('mongodb://afatlanta:afatl$$@ds117311.mlab.com:17311/almostfamousatl');

var Events = require('./app/models/events');
var Photos = require('./app/models/photos')

//configure app to use bodyParser(), Morgan
//log requests to the console
app.use(morgan('dev'));

//get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//set port
var port = process.env.PORT || 8080;

//Routes for API
//get an instance of express router
var router = express.Router();

//middle to use for all request
router.use(function(req, res, next){
  //log something
  console.log('Something is happening.');
  //make sure we go to the next routes and don't stop there. Application would stop at this middleware without it.
  next();
});

//test route to make sure everthing is working
router.get('/', function(req, res){
  res.json({ message: 'This is Almost Famous API'});
});

//Add more routes here
//All routes that end in /events STARTS here
router.route('/events')

.post(function(req, res){

  var event = new Events();
  event.date = req.body.date,
  event.venue = req.body.venue,
  event.startTime = req.body.startTime,
  event.endTime = req.body.endTime,
  event.ticketLink = req.body.ticketLink;

  event.save(function(err) {
    if(err)
      res.send(err);

    res.json({message: 'Event created!'});
  });

});

//ll routes that end in /events ENDS here

//register routes
// all routes will be prefixed /api
app.use('/api', router);

//start the server
app.listen(port);
console.log('Things are happening on port ' +  port);