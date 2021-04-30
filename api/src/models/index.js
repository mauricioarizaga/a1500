const config = require("../config/index");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.databaseURL)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.strings = require("./String.js")(sequelize, Sequelize);

module.exports = db;