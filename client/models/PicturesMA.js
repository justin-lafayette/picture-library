const Sequelize = require("sequelize");

const sequelize = require("../config/connection");

const pictures = sequelize.define(
  "pictures",
  {
    picture_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: Sequelize.STRING,
    picture_url: Sequelize.STRING,
    picture_file: Sequelize.BLOB
  },
  {
    freezeTableName: true
  },
                                                                                    
);

pictures.associate = function(models){
    pictures.belongsTo(models.User);
};


module.exports = pictures;
