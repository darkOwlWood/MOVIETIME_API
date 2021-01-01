require('dotenv').config();

const config = {
    port: process.env.PORT,
    env: process.env.ENV==='development',
};

module.exports = { config };