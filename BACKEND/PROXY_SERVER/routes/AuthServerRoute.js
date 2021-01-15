const express = require('express');
const router = express.Router();
const AuthServerController = require('../controllers/AuthServerController');
const authServerController = new AuthServerController();

const authServer = (app) => {
    app.use('/authserver',router);

    router.post('/signin',authServerController.signin);
    router.post('/login',authServerController.login);
    router.post('/token',authServerController.generateJWT);
    router.delete('/logout',authServerController.logout);
}

module.exports = { authServer };