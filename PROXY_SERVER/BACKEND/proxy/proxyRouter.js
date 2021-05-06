const path = require('path');
const proxy = require('express-http-proxy');
const express = require('express');
const router = express.Router();

const {
    proxyAuthLogin,
    proxyAuthLogout,
    proxyAuthToken,
    proxyApiRequestMovies,
    proxyApiRequestUserMovies,
    proxyApiRequestAddUserMovie,
    proxyApiRequestDeleteUserMovie,
} = require('./proxyOptions');
const { config: { protocol, authServer, apiServer } } = require('../config');

const proxyRouter = app => {
    app.use(router);

    //AUTH
    router.post('/auth/signin', proxy(`${protocol}://${authServer}/auth/signin`));
    router.post('/auth/login',  proxy(`${protocol}://${authServer}/auth/login`,  proxyAuthLogin));
    router.post('/auth/logout', proxy(`${protocol}://${authServer}/auth/logout`, proxyAuthLogout));
    router.post('/auth/token',  proxy(`${protocol}://${authServer}/auth/token`,  proxyAuthToken));

    //API
    router.get('/movies',        proxy(`${protocol}://${apiServer}/movies`,     proxyApiRequestMovies));
    router.get('/userMovies',    proxy(`${protocol}://${apiServer}/userMovies`, proxyApiRequestUserMovies));
    router.post('/userMovies',   proxy(`${protocol}://${apiServer}/userMovies`, proxyApiRequestAddUserMovie));
    router.delete('/userMovies', proxy(`${protocol}://${apiServer}/userMovies`, proxyApiRequestDeleteUserMovie));

    router.get('/*', (req, res, next) => res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html')));
}

module.exports = {
    proxyRouter,
}