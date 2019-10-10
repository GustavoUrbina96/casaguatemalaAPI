import mongoose from 'mongoose';
import { config } from '../config';
import { Db } from 'mongodb';

export default async (): Promise<Db> => {
    const connection = await mongoose.connect(config.databaseURL, {useNewUrlParser: true });

    return connection.connection.db;
}