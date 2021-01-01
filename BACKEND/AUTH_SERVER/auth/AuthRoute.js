const express = require('express');
const router = express.Router();
const AuthController = require('./AuthController');
const authController = new AuthController();

const authRoute = (app) => {
    app.use('/auth',router);

    router.post('/sigin',authController.signin);
    router.post('/login',authController.login);
    router.delete('/logout',authController.logout);
}

module.exports = { authRoute };