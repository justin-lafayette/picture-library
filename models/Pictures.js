module.exports = function(sequelize, DataTypes) {

  const pictures = sequelize.define(
  "pictures",
  {
    picture_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    picture_url: DataTypes.STRING,
    picture_height: DataTypes.INTEGER,
    picture_width: DataTypes.INTEGER,
    picture_attribute_unit: {
      type: DataTypes.STRING,
      defaultValue: "Inches"
    }
  },
  {
    freezeTableName: true
  }
  
  );
  
  pictures.associate = function(models){
    pictures.belongsTo(models.events, {foreignKey: 'event_id'});
  };
  

  return pictures;
}
