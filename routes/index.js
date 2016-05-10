var express = require('express')
var router = express.Router()
var db = require('../models')
var Hotel = require('../models/hotel')
var Rest = require('../models/restaurant')
var Act = require('../models/activity')
var Promise = require('bluebird')

function names(items) {
  return items.map(function(item) {
    return item.name
  })
}

router.get('/names', function(req, res, next) {
  // res.json('HELLO').send()
  Promise.all([
    Hotel.findAll(),
    Rest.findAll(),
    Act.findAll()
  ])
  .spread(function(hotels, rests, acts) {
    var name = [names(hotels), names(rests), names(acts)]
    // res.json(name).send();
    return name
  })
  .then(function(name) {
    res.render('index', {
      hotels: name[0],
      restaurants: name[1],
      activities: name[2]
    })
  })
  .catch(next)

  // res.render('layout')
})

module.exports = router
