const express = require('express');
const router = express.Router();
const AuthController = require('./AuthController');
const authController = new AuthController();
const passport = require('passport');
const { validationHandler } = require('../utils/middlewares/validationHandler');
const { UserIdAndVerify, UserVerifyCode, UserCreateModel } = require('../users/UserModel');

require('../auth/strategies/basic');

const authRoute = (app) => {
    app.use('/auth',router);

    router.post('/signin',validationHandler(UserCreateModel),authController.signin);
    router.post('/login',validationHandler(UserVerifyCode),passport.authenticate('basic',{ session: false }),authController.login);
    router.post('/token',validationHandler(UserIdAndVerify),authController.generateJWT);
    router.delete('/logout',validationHandler(UserIdAndVerify),authController.logout);
}

module.exports = { authRoute };