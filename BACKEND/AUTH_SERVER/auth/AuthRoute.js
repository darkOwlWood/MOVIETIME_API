const express = require('express');
const router = express.Router();
const AuthController = require('./AuthController');
const authController = new AuthController();
const passport = require('passport');
const { createJWT } = require('../utils/middlewares/createJWT');
const { validationHandler } = require('../utils/middlewares/validationHandler');
const { UserCreateModel } = require('../users/UserModel');

require('../auth/strategies/basic');

const authRoute = (app) => {
    app.use('/auth',router);

    router.post('/sigin',validationHandler(UserCreateModel),authController.signin);
    router.post('/login',passport.authenticate('basic',{ session: false }),createJWT,authController.login);
    router.delete('/logout',authController.logout);
}

module.exports = { authRoute };