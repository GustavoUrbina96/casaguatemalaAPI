import { config } from '../config';
const Sequelize = require('sequelize');

export const sequelize = new Sequelize(config.databaseName,config.databaseUser,config.databasePassword, {
    host: config.databaseURL,
    dialect: config.dialect,
    port: config.portDatabase
});