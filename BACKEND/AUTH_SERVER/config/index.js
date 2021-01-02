require('dotenv').config();

const config = {
    port:              process.env.PORT,
    env:               process.env.ENV==='development',
    dbUser:            process.env.DB_USER,
    dbPassword:        process.env.DB_PASSWORD,
    dbName:            process.env.DB_NAME,
    dbHost:            process.env.DB_HOST,
    jwtExpireTimeSec : process.env.JWT_EXPIRE_TIME_SEC,
    secretJwtAccess :  process.env.SECRET_JWT_ACCESS,
};

module.exports = { config };