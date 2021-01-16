const express = require('express');
const router = express.Router();
const ApiServerController = require('../controllers/ApiServerController');
const apiServerController =  new ApiServerController();

const apiServerRoute = (app) => {
    app.use('/apiserver',router);

    router.get('/movies/:id',apiServerController.getMoviesById);
    router.get('/movies',apiServerController.getMovies);

    router.get('/userMovies',apiServerController.getUserMovies);
    router.post('/userMovies',apiServerController.insertUnserMovie);
    router.delete('/userMovies/:id',apiServerController.deleteUserMovie);
}

module.exports = { apiServerRoute };