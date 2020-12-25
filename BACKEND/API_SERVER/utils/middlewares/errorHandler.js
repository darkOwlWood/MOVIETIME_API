const boom = require('@hapi/boom');
const { config } = require('../../config');

const withErrorStack = (error, stack) => config.develop_mode? { error, stack } : error;

const logErrors = (error, req, res, next) => {
    console.error(error);
    next(error);
}

const wrapErrors = (error, req, res, next) => next(err.isBoom? err : boom.badImplementation(err));

function errorHandler(error, req, res, next){
    const { output: { statusCode, payload } } = error;
    res.status(statusCode).json(withErrorStack(payload,error.stack));
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler,
}
