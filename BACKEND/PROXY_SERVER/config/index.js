require('dotenv').config();

const config = {
    port:          process.env.PORT,
    develop_mode:  process.env.ENV==='DEVELOPMENT',
    protocol:      process.env.ENV==='DEVELOPMENT'? 'http' : 'https',
    api_server:    process.env.API_SERVER,
    auth_server:   process.env.AUTH_SERVER,
    cookie_secret: process.env.COOKIE_SECRET,
    http_only:     process.env.HTTPONLY,
    max_age:       process.env.MAXAGE,
    path:          process.env.COOKIE_PATH,
    secure:        !process.env.ENV==='DEVELOPMENT',
    signed:        process.env.SIGNED,
}

module.exports = { config };