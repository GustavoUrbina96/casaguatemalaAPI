import * as express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import router from '../routes';
import { config } from 'dotenv';


/**
 * Express configuration initializer
 * 
 * @param app express.Application
 */
export default async ( { app }: {app: express.Application}) => { 
     // Enable Cross Origin Resource Sharing to all origins by default
    app.use(cors());
    // Body parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    // Load API routes
    app.use('/api', router());

    return app;
}