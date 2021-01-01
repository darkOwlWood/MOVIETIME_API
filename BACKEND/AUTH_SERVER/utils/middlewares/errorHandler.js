const boom = require('@hapi/boom');
const { config } = require('../../config');

const withErrorStack = (stack,payload) => config.env? { payload, stack } : { payload };

const logError = (error,req,res,next) => {
    console.error(error);
    next(error);
}

const wrapError = (error ,req, res, next) => next(error.isBoom? error : boom.badImplementation(error));

const errorHandler = (error, req, res, next) => {
    const { output: { statusCode, payload } } = error;
    res.status(statusCode).json(withErrorStack(error.stack,payload));
}

module.exports = { 
    logError,
    wrapError,
    errorHandler,
};