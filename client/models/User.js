const Sequelize = require("sequelize");

const sequelize = require("../config/connection");

const user = sequelize.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      len: [1]
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING
  },
  {
    freezeTableName: true
  }
);

user.associate = function(models){
    User.hasMany(models.Pictures)
};

module.exports = user;
