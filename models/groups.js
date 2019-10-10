'use strict';
module.exports = (sequelize, DataTypes) => {
  const groups = sequelize.define('groups', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    name: DataTypes.STRING
  }, {});
  groups.associate = function (models) {
    // associations can be defined here
    groups.hasMany(models.user, { through: 'group_user' });
    groups.hasMany(models.sponsees, { through: 'group_sponsee' });
  };
  return groups;
};