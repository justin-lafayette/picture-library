module.exports = function(sequelize, DataTypes) {
  const users = sequelize.define(
    "users",
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

  users.associate = function(models){
    console.log(models)
    users.hasMany(models.pictures)
  };

  users.associate = function(models){
    users.belongsToMany(models.events,  {
      through: 'EventUsers',
      foreignKey : 'email'
    });
  };
  return users;
}
