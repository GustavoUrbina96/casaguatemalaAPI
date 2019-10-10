'use strict';
module.exports = (sequelize, DataTypes) => {
  const group_user = sequelize.define('group_user', {
    group_id: DataTypes.UUID,
    user_id: DataTypes.UUID
  }, {});
  group_user.associate = function(models) {
    // associations can be defined here
  };
  return group_user;
};