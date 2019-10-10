"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: process.env.PORT || 3000,
    portDatabase: process.env.PORTDATABASE || '3306',
    dialect: process.env.DIALECT || 'mysql',
    databaseURL: process.env.DATABASE_URI || 'localhost',
    databaseUser: process.env.DATABASEUSER || 'root',
    databasePassword: process.env.DATABASEPASS || 'admin',
    databaseName: process.env.DATABASENAME || 'casaguatemala'
};
