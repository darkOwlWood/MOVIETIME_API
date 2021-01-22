const { config } = require('../../config');

const logError = (err, res, req, next) => {
    console.log(':::>>',err.stack,'<<:::');
    next(err);
}

const responceError = (err, req, res, next) => {
    const { stack, response:{ status, statusText } } = err;
    res.status(status).send({ statusText, stack: config.developMode? stack : '' });
}

module.exports = { 
    logError,
    responceError,
 };