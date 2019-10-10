'use strict';
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('roles', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    name: DataTypes.STRING,
  }, {});
  roles.associate = function (models) {
    // associations can be defined here
    roles.belongsToMany(models.user, { through: 'user_role', foreignKey:'role_id' });
  };
  return roles;
};