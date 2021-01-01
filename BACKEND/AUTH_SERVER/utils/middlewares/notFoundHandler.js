const boom = require('@hapi/boom');

const notFoundHandler = (req, res, next) => {
    const { output: { statusCode, payload: { error, message} } } = boom.notFound();
    res.status(statusCode).json({ error, message });
};

module.exports = { notFoundHandler }