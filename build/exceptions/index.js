"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFoundException = (res) => {
    res.status(404).send({ error: 'Resource Not Found' });
};
const BadRequestException = (res, message) => {
    res.status(400).send({ error: message });
};
const ServerErrorException = (res) => {
    res.status(500);
};
const exceptions = {
    NotFoundException,
    BadRequestException,
    ServerErrorException
};
exports.default = exceptions;
