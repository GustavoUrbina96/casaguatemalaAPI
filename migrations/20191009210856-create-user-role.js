'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_role', {
      role_id: {
        primaryKey: true,
        type: Sequelize.UUID,
      },
      user_id: {
        primaryKey: true,
        type: Sequelize.UUID,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_role');
  }
};