require('dotenv').config();

const config = {
    port:            process.env.PORT,
    developMode:     process.env.ENV==='DEVELOPMENT',
    pageSize:        process.env.PAGE_SIZE,
    dbUser:          process.env.DB_USER,
    dbName:          process.env.DB_NAME,
    dbPassword:      process.env.DB_PASSWORD,
    dbHost:          process.env.DB_HOST,
    secretJwtAccess: process.env.SECRET_JWT_ACCESS,
};

module.exports = { config };