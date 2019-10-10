import { sequelize } from '../databaseConection'
import { organizations } from './organizationsModel';
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
export class locations extends Model { }
locations.init({
    // attributes
    id: {
        type: Sequelize.STRING(32),
        primaryKey: true,
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
    modelName: 'locations'
    // options
});

locations.hasOne(organizations)

