var Sequelize = require('sequelize')
var dbString = 'tripplanner'

var db = new Sequelize(dbString, 'bpr', 'sunshine', {
  dialect: 'postgres',
  port: 5432,
  logging: false
});

module.exports = db
