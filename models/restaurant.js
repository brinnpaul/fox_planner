var Sequelize = require('sequelize')
var dbString = 'tripplanner'
var db = require('./index.js')
var Place = require('./place.js')

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER
  },
})

Restaurant.belongsTo(Place)

module.exports = Restaurant
