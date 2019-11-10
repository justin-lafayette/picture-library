module.exports = function(sequelize, DataTypes) {

  const EventUsers = sequelize.define(
    "EventUsers",
    {
      eventuser_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
      description: DataTypes.STRING
    },
    {
      freezeTableName: true
    }
  );
  return EventUsers;
  }