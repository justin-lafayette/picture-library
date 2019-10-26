module.expots = function(sequelize, DataTypes){
    var pictures = sequelize.define('Pictures',
        {
            picture_id: {
                type : DataTypes.integer,
                primaryKey : true,
                autoIncrement : true
            },
            title: DataTypes.String,
            picture_url: DataTypes.String,
            picture_file: DataTypes.BLOB('long'),
            freezeTableName: true
        });

        pictures.sync()
        .then(()=> console.log('Sync successful'))
        .catch((err)=>{'Unable to sync-'+err});

        return pictures;
};