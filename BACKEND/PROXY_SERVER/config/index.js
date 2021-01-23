require('dotenv').config();

const config = {
    port:          process.env.PORT,
    developMode:   process.env.ENV==='DEVELOPMENT',
    protocol:      process.env.ENV==='DEVELOPMENT'? 'http' : 'https',
    apiServer:     process.env.API_SERVER,
    authServer:    process.env.AUTH_SERVER,
    frontendPage:  process.env.FRONTEND_PAGE,
    cookieSecret:  process.env.COOKIE_SECRET,
    httpOnly:      process.env.HTTPONLY,
    maxAge:        process.env.MAXAGE,
    path:          process.env.COOKIE_PATH,
    secure:        !process.env.ENV==='DEVELOPMENT',
    signed:        process.env.SIGNED,
    userApiKey:    process.env.USER_API_KEY,
}

console.log(config);

module.exports = { config };