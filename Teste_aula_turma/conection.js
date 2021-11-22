const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "task.db",
});

sequelize.sync();

module.exports = sequelize;
