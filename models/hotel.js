var Sequelize = require('sequelize')
var dbString = 'tripplanner'
var db = require('./index.js')
var Place = require('./place.js')

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.INTEGER
  },
  amenities: {
    type: Sequelize.TEXT
  }
})

Hotel.belongsTo(Place)

module.exports = Hotel
