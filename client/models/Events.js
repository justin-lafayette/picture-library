module.expots = function(sequelize, DataTypes){
    var events = sequelize.define('Events',
        {
            event_id: {
                type : DataTypes.integer,
                primaryKey : true,
                autoIncrement : true
            },
            event_title: DataTypes.String,
            event_date : DataTypes.date,
            event_description: DataTypes.String,
            freezeTableName: true
        });

        events.sync()
          .then(()=> console.log('Sync successful'))
          .catch((err)=>{'Unable to sync-'+err});
        return events;
};