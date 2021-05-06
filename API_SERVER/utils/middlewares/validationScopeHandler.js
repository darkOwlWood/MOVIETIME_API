const boom = require('@hapi/boom');

const validationScopeHandler = routeScopes => (
    (req, res, next) => {
        let { scopes:jwtScopes } = req.user;
        const similarScopes = Array(...(new Set(jwtScopes)))
                                .map( val => routeScopes.includes(val) )
                                .filter( val => val );
        const hasScopes = similarScopes.length===routeScopes.length;
        next(hasScopes? null : boom.unauthorized());
    }
);

module.exports = {
    validationScopeHandler,
}