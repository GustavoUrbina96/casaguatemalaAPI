'use strict';
module.exports = (sequelize, DataTypes) => {
  const organizations = sequelize.define('organizations', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoINcrement:false
    },
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  organizations.associate = function(models) {
    // associations can be defined here
  };
  return organizations;
};