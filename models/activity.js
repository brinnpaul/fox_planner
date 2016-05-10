var Sequelize = require('sequelize')
var dbString = 'tripplanner'
var db = require('./index')
var Place = require('./place.js')

var Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING
  }
})

Activity.belongsTo(Place)

module.exports = Activity
