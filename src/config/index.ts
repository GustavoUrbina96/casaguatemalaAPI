import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    portDatabase: process.env.PORTDATABASE || '3306',
    dialect: process.env.DIALECT || 'mysql',
    databaseURL: process.env.DATABASE_URI || 'localhost',
    databaseUser: process.env.DATABASEUSER || 'root',
    databasePassword: process.env.DATABASEPASS || 'admin',
    databaseName: process.env.DATABASENAME || 'casaguatemala'
}