const boom = require('@hapi/boom');

const validationHandler = (schema,check='body') => (
    (req, res, next) => {
        const { error } = schema.validate(req[check]);
        next(error? boom.badRequest(error) : undefined);
    }
);

module.exports = { validationHandler };