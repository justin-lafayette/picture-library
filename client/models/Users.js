module.exports = function(sequelize, DataTypes){
    var users = sequelize.define('Users', {
        user_email: {
            type: DataTypes.String,
            primaryKey: true},
        password: {
            type: DataTypes.String,
            allowNull: false,
            len: [1]},
        first_name: DataTypes.String,
        last_name: DataTypes.String,
        freezeTableName: true
    });

    users.sync()
          .then(()=> console.log('Sync successful'))
          .catch((err)=>{'Unable to sync-'+err});
    return users;
};