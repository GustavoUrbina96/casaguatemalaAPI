import { sequelize } from '../databaseConection'

const Sequelize = require('sequelize');
const Model = Sequelize.Model;
export class organizations extends Model { }
organizations.init({
    // attributes
    id: {
        type: Sequelize.STRING(32),
        primaryKey: true,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name: {
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
    modelName: 'organizations'
    // options
});

