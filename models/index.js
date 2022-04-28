const dbConfig = require("../config/db.config.js");
const { my,pg } = dbConfig

const Sequelize = require("sequelize");
const sequelize = new Sequelize(pg.DB, pg.USER, pg.PASSWORD, {
  host: pg.HOST,
  dialect: pg.dialect,
  operatorsAliases: false,
  protocol:"tcp",

  pool: {
    max: pg.pool.max,
    min: pg.pool.min,
    acquire: pg.pool.acquire,
    idle: pg.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./model.js")(sequelize, Sequelize);

module.exports = db;
