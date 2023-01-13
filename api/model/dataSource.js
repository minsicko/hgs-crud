const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hgs", "root", "pwpwpw", {
  host: "localhost",
  // port: 3000,
  dialect: "mysql",
});

module.exports = sequelize;
