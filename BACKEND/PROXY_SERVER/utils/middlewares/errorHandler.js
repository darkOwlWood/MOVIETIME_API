const boom = require('@hapi/boom');
const { config } = require('../../config');

const logError = (err, res, req, next) => {
    console.error('Error stack -->> \n',err.stack);
    next(err);
}

const wrapError = (err, req, res, next) => next(err.isBoom? err : boom.badImplementation(err));

const responceError = (err, req, res, next) => {
    const { stack, output:{ statusCode, payload } } = err;
    res.status(statusCode).send({ payload, stack: config.developMode? stack : '' });
}

module.exports = { 
    logError,
    wrapError,
    responceError,
 };