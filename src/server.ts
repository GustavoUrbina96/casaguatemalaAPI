import express from 'express';
import { config } from './config';
import { sequelize } from './database/databaseConection'
import { User } from './database/models/UserModel'
import initializeApp from './loaders';


async function startServer() {
    const app = express();
    await sequelize
        .authenticate()
        .then(() => {
            console.log('Connection with database has been established succesfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        })
    await initializeApp({ expressApp: app });
    app.listen(config.port, () => {
        console.log(`APP RUNNING IN PORT ${config.port}`);
    });
}

startServer();

