'use strict';
module.exports = (sequelize, DataTypes) => {
  const sponsees = sequelize.define('sponsees', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    bio: DataTypes.TEXT,
    birth_date: DataTypes.DATE,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    profile_picture: DataTypes.STRING
  }, {});
  sponsees.associate = function (models) {
    // associations can be defined here
    sponsees.belongsTo(models.locations);
    sponsees.hasMany(models.user,{through:'sponsor_sponsees'});
    sponsees.hasMany(models.groups,{through:'group_sponsee'});

  };
  return sponsees;
};