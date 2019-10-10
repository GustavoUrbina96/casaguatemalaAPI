'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
      },
      bio:{
        type: Sequelize.TEXT,
        allowNull:true
      },
      birth_date:{
        type: Sequelize.DATE,
        allowNull:true
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false
      },
      first_name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      last_name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      last_signed:{
        type:Sequelize.DATE,
        allowNull:false
      },
      location_id:{
        type: Sequelize.UUID,
        references:{
          model:"locations",
          key:"id"
        },
        onUpdate:"SET NULL",
        onDelete: "SET NULL",
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false
      },
      profile_picture:{
        type:Sequelize.STRING,
        allowNull:false
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
    return queryInterface.dropTable('users');
  }
};