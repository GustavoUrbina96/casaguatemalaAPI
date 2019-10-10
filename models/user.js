'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false
    },
    bio: DataTypes.TEXT,
    birth_date: DataTypes.DATE,
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    last_signed: DataTypes.DATE,
    password: DataTypes.STRING,
    profile_picture: DataTypes.STRING
  }, {});
  user.associate = function (models) {
    // associations can be defined here
    user.hasOne(models.locations);
    user.belongsToMany(models.sponsees, { through: 'sponsor_sponsees' });
    user.belongsToMany(models.roles, { through: 'user_role', foreignKey: 'user_id'});
    user.belongsToMany(models.groups, { through: 'group_user' });
  };



  return user;
};