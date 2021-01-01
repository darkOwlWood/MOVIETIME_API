require('dotenv').config();

const config = {
    port:       process.env.PORT,
    env:        process.env.ENV==='development',
    dbUser:     process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName:     process.env.DB_NAME,
    dbHost:     process.env.DB_HOST,
};

module.exports = { config };