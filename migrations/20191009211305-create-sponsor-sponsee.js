'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sponsor_sponsees', {
      sponsee_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      sponsor_id: {
        allowNull: false,
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
    return queryInterface.dropTable('sponsor_sponsees');
  }
};