require('dotenv').config();

const config = {
    port: process.env.PORT,
    develop_mode: process.env.ENV==='DEVELOPMENT',
    api_server: process.env.API_SERVER,
    auth_server: process.env.AUTH_SERVER,
}

module.exports = { config };