"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class Admin extends Model {
}
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
    sequelize: database_1.sequelize,
    modelName: 'Admin'
    // options
});
Admin.sync({ force: true }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return Admin.create({
        firstName: 'John',
        lastName: 'Hancock',
        email: 'admin@admin.com',
        password: 'admin'
    });
});
