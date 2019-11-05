module.exports = function(sequelize, DataTypes) {

  const events = sequelize.define(
    "events",
    {
      event_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
      title : DataTypes.STRING,
      event_date: DataTypes.DATE,
      event_description: DataTypes.STRING
    },
    {
      freezeTableName: true
    }
  );
  
  events.associate = function(models){
    events.belongsToMany(models.users, {through: events});
  };
  
  events.associate = function(models){
    events.belongsTo(models.videos, {foreignKey : 'video_id'});
  };
  
  return events;
  }