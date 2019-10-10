'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('locations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      image:{
        type: Sequelize.STRING,
        allowNull: true
      },
      organization_id:{
        type: Sequelize.UUID,
        references:{
          model:'organizations',
          key:'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('locations');
  }
};