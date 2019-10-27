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
    picture_file: DataTypes.BLOB
  },
  {
    freezeTableName: true
  }
  
  );
  
  pictures.associate = function(models){
    pictures.belongsTo(models.user, {foreignKey: 'email'});
  };
  
  return pictures;
}
