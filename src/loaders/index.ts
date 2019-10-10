import expressLoader from './express';

async function initializeApp ({ expressApp }) {
  
    await expressLoader({app: expressApp});
    console.log('Express Intialized');

    return expressApp;
}

export default initializeApp;