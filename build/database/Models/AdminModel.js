"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const databaseConection_1 = require("../databaseConection");
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class Admin extends Model {
}
exports.Admin = Admin;
Admin.init({
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bio: {
        type: Sequelize.TEXT('tiny')
    }
}, {
    sequelize: databaseConection_1.sequelize,
    modelName: 'Admin'
    // options
});
