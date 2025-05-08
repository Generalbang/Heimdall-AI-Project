const { Sequelize } = require("sequelize");
const sqlite3 = require("sqlite3");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "blog.db", // Path to the SQLite database file
});

module.exports = sequelize;
