const jwt = require('jsonwebtoken');
const { config } = require('../../config');

const createJWT = (req, res, next) => {
    const { _id, email } = req.user;
    const payload = { _id, email };
    const accessKey = config.secretJwtAccess;
    const expiresIn = `${config.jwtExpireTimeMs}ms`;

    const token = jwt.sign(payload, accessKey, { expiresIn });
    req.accessToken = token;

    next();
};

module.exports = { createJWT };