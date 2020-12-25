require('dotenv').config();

const config = {
    port:         process.env.PORT,
    develop_mode: process.env.ENV==='DEVELOPMENT',
    db_user:      process.env.DB_USER,
    db_name:      process.env.DB_NAME,
    db_password:  process.env.DB_PASSWORD,
    db_host:      process.env.DB_HOST,
    page_size:    process.env.PAGE_SIZE,
};

module.exports = { config };