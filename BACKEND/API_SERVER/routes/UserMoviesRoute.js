const express = require('express');
const router = express.Router();
const UserMoviesController = require('../controllers/UserMoviesController');
const userMoviesController = new UserMoviesController();
const { validationHandler } = require('../utils/middlewares/validationHandler');
const { UserIdModel, UserMoviesCreateDeleteModel } = require('../models/UserMoviesModel');

const userMoviesRoute = (app) => {
    app.use('/userMovies',router);

    router.get('/:userId',validationHandler(UserIdModel,'params'),userMoviesController.getUserMoviesByPage);
    router.post('/',validationHandler(UserMoviesCreateDeleteModel),userMoviesController.insertUserMovies);
    router.delete('/:userId/:movieId',validationHandler(UserMoviesCreateDeleteModel,'params'),userMoviesController.deleteUserMovies);
};

module.exports = { userMoviesRoute };