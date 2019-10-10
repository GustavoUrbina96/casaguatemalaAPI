import express from 'express';

const NotFoundException = (res: express.Response): void => {
    res.status(404).send({error: 'Resource Not Found'});
}

const BadRequestException = (res: express.Response, message: string): void => {
    res.status(400).send({error: message});
}

const ServerErrorException = (res: express.Response): void => {
    res.status(500);
}

const exceptions = {
    NotFoundException,
    BadRequestException,
    ServerErrorException
}

export default exceptions;