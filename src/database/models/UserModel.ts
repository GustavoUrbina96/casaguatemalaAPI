import { sequelize } from '../databaseConection'

const Sequelize = require('sequelize');
const Model = Sequelize.Model;
export class User extends Model { }
User.init({
    // attributes
    id: {
        type: Sequelize.STRING(32),
        primaryKey: true,
    },
    bio: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    birth_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_signed: {
        type: Sequelize.DATE,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profile_picture: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
}, {
    sequelize,
    modelName: 'User'
    // options
});

User.hasOne()
