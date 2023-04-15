const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Person = sequelize.define("person", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  phone: {
    type: Sequelize.STRING,
    unique: true,
  },
});

module.exports = Person;
