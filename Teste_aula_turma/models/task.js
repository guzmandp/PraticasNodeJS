const { DataTypes } = require("sequelize");
const sequelize = require("../conection");

const Task = sequelize.define("Task", {
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Task;
