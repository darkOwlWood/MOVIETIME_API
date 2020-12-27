const express = require('express');
const router = express.Router();
const MoviesController = require('../controllers/MoviesController');
const moviesController = new MoviesController();
const { validationHandler } = require('../utils/middlewares/validationHandler');
const { MovieIdModel, MovieIdArrayModel, MovieCreateModel, MovieUpdateModel } = require('../models/MoviesModel');

const moviesRoute = (app) => {
    app.use('/movies',router);

    router.get('/:id',validationHandler(MovieIdArrayModel,'params'),moviesController.getMovieById);
    router.get('/',moviesController.getMoviesByPage);
    router.post('/',validationHandler(MovieCreateModel),moviesController.insertMovie);
    router.put('/:id',validationHandler(MovieIdModel,'params'),validationHandler(MovieUpdateModel),moviesController.updateMovie);
    router.delete('/:id',validationHandler(MovieIdModel,'params'),moviesController.deleteMovie);
    
};

module.exports = { moviesRoute };