const express = require('express');
const router = express.Router();
const AuthController = require('./AuthController');
const authController = new AuthController();
const { validationHandler } = require('../utils/middlewares/validationHandler');
const { UserCreateModel } = require('../users/UserModel');

const authRoute = (app) => {
    app.use('/auth',router);

    router.post('/sigin',validationHandler(UserCreateModel),authController.signin);
    router.post('/login',authController.login);
    router.delete('/logout',authController.logout);
}

module.exports = { authRoute };