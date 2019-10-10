"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const databaseConection_1 = require("./database/databaseConection");
const loaders_1 = __importDefault(require("./loaders"));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express_1.default();
        yield databaseConection_1.sequelize
            .authenticate()
            .then(() => {
            console.log('Connection with database has been established succesfully.');
        })
            .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
        // Admin.sync({ force: true }).then(() => {
        //     // Now the `users` table in the database corresponds to the model definition
        //     return Admin.create({
        //       firstName: 'John',
        //       lastName: 'Hancock',
        //       email:'admin@admin.com',
        //       password:'admin'
        //     });
        //   });
        yield loaders_1.default({ expressApp: app });
        app.listen(config_1.config.port, () => {
            console.log(`APP RUNNING IN PORT ${config_1.config.port}`);
        });
    });
}
startServer();
