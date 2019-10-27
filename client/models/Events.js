const Sequelize = require("sequelize");

const sequelize = require("../config/connection");

const events = sequelize.define(
  "events",
  {
    event_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    title : Sequelize.STRING,
    event_date: Sequelize.DATE,
    event_description: Sequelize.STRING
  },
  {
    freezeTableName: true
  }
);

// events.associate = function(models){
//   events.BelongsTo(models.User);  
// };

module.exports = events;
