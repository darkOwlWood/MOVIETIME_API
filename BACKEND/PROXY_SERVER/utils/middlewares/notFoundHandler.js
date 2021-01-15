const boom = require('@hapi/boom');

const notFoundHandler = (req, res, next) => {
    const { message, output:{ statusCode }  } = boom.notFound();
    res.status(statusCode).json({ statusCode , message });
}

module.exports = { notFoundHandler };