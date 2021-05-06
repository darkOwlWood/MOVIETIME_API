const express = require('express');
const router = express.Router();
const MoviesController = require('../controllers/MoviesController');
const moviesController = new MoviesController();
const passport = require('passport');
const { validationHandler } = require('../utils/middlewares/validationHandler');
const { validationScopeHandler } = require('../utils/middlewares/validationScopeHandler');
const { MovieIdModel, MovieIdArrayModel, MovieCreateModel, MovieUpdateModel } = require('../models/MoviesModel');

require('../utils/auth/jwt');

const moviesRoute = (app) => {
    app.use('/movies',router);

    router.get(
        '/:id',
        passport.authenticate('jwt',{ session:false }),
        validationScopeHandler(['movies:read']),
        validationHandler(MovieIdArrayModel,'params'),
        moviesController.getMovieById
    );

    router.get(
        '/',
        passport.authenticate('jwt',{ session:false }),
        validationScopeHandler(['movies:read']),
        moviesController.getMoviesByPage
    );

    router.post(
        '/',
        passport.authenticate('jwt',{ session:false }),
        validationScopeHandler(['movies:create']),
        validationHandler(MovieCreateModel),
        moviesController.insertMovie
    );

    router.put(
        '/:id',
        passport.authenticate('jwt',{ session:false }),
        validationScopeHandler(['movies:update']),
        validationHandler(MovieIdModel,'params'),
        validationHandler(MovieUpdateModel),
        moviesController.updateMovie
    );

    router.delete(
        '/:id',
        passport.authenticate('jwt',{ session:false }),
        validationScopeHandler(['movies:delete']),
        validationHandler(MovieIdModel,'params'),
        moviesController.deleteMovie
    );
    
};

module.exports = { moviesRoute };