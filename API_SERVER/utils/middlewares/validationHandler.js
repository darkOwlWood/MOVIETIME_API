const boom = require('@hapi/boom');

const validationHandler = (model,check='body') => (
    (res, req, next) => {
        const { error } = model.validate(res[check]);
        next(error? boom.badRequest(error) : undefined);
    }
);

module.exports = { validationHandler };