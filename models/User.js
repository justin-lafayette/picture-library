module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING
    },
    {
      freezeTableName: true
    }
  );

  user.associate = function(models){
    console.log(models)
    user.hasMany(models.pictures)
  };

  user.associate = function(models){
    console.log(models)
    user.hasMany(models.events)
  };

  return user;
}
