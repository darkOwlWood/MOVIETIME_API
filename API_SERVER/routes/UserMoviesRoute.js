const express = require('express');
const router = express.Router();
const UserMoviesController = require('../controllers/UserMoviesController');
const userMoviesController = new UserMoviesController();
const passport = require('passport');
const { validationHandler } = require('../utils/middlewares/validationHandler');
const { validationScopeHandler } = require('../utils/middlewares/validationScopeHandler');
const { UserIdModel, UserMoviesCreateDeleteModel } = require('../models/UserMoviesModel');

require('../utils/auth/jwt');

const userMoviesRoute = (app) => {
    app.use('/userMovies', router);

    router.get(
        '/:userId',
        passport.authenticate('jwt', { session: false }),
        validationScopeHandler(['user-movies:read']),
        validationHandler(UserIdModel, 'params'),
        userMoviesController.getUserMoviesByPage
    );

    router.post(
        '/',
        passport.authenticate('jwt', { session: false }),
        validationScopeHandler(['user-movies:create']),
        validationHandler(UserMoviesCreateDeleteModel),
        userMoviesController.insertUserMovies
    );

    router.delete(
        '/:userId/:movieId',
        passport.authenticate('jwt', { session: false }),
        validationScopeHandler(['user-movies:delete']),
        validationHandler(UserMoviesCreateDeleteModel, 'params'),
        userMoviesController.deleteUserMovies
    );
};

module.exports = { userMoviesRoute };