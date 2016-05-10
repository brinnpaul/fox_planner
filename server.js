var http = require('http');
var server = http.createServer();
var db = require('./models');
var Place = require('./models/place')
var Activity = require('./models/activity')
var Restaurant = require('./models/restaurant')
var Hotel = require('./models/hotel')
var Promise = require('bluebird');

server.on('request', require('./app'));

Promise.all([
  Place.sync({}),
  Activity.sync({}),
  Restaurant.sync({}),
  Hotel.sync({})
])
.then(function (obj) {
  server.listen(3000, function () {
    console.log('Server is listening on port 3000!');
  });
})
.catch(console.error);
