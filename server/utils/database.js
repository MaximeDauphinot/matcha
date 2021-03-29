const Sequelize = require("sequelize");

const sequelize = new Sequelize("matcha", "root", "Dauphin42", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
