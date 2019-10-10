'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('group_users', {
      group_id: {
        primaryKey: true,
        type: Sequelize.UUID,
      },
      user_id: {
        primaryKey: true,
        type: Sequelize.UUID,
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
    return queryInterface.dropTable('group_users');
  }
};