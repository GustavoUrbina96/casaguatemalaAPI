"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize(config_1.config.databaseName, config_1.config.databaseUser, config_1.config.databasePassword, {
    host: config_1.config.databaseURL,
    dialect: config_1.config.dialect,
    port: config_1.config.portDatabase
});
