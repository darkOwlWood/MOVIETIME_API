const MoviesService = require('../services/MoviesService');

class MoviesController{
    constructor(){
        this.init();
        this.route = 'movies';
        this.moviesService = new MoviesService();
    }

    init(){
        this.getMovieById =    this.getMovieById.bind(this); 
        this.getMoviesByPage = this.getMoviesByPage.bind(this);
        this.insertMovie =     this.insertMovie.bind(this);
        this.updateMovie =     this.updateMovie.bind(this);
        this.deleteMovie =     this.deleteMovie.bind(this);
    }

    async getMovieById(req, res, next){
        const { id } = req.params;
        try{
            const movieData = await this.moviesService.getMovieById(id);
            res.json(movieData);
        }catch(error){
            next(error);
        }
    }

    async getMoviesByPage(req, res, next){
        const { query, protocol } = req;
        try{
            const url = `${protocol}://${req.get('host')}/${this.route}`;
            const moviePage = await this.moviesService.getMoviesByPage(url,query);
            res.json(moviePage);
        }catch(error){
            next(error);
        }
    }

    async insertMovie(req, res, next){
        const { body:userModel } = req;
        try{
            const insertedId = await this.moviesService.insertMovie(userModel);
            res.status(201).json({ insertedId });
        }catch(error){
            next(error);
        }
    }

    async updateMovie(req, res, next){
        const { params:{ id }, body:userModel } = req;
        try{
            const modifiedCount = await this.moviesService.updateMovie(id,userModel);
            res.status(201).json({ modifiedCount });
        }catch(error){
            next(error);
        }
    }

    async deleteMovie(req, res, next){
        const { id } = req.params;
        try{
            const deletedCount = await this.moviesService.deleteMovie(id);
            res.status(204).json({ deletedCount });
        }catch(error){
            next(error);
        }
    }
}

module.exports = MoviesController;