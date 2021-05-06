const UserMoviesService = require('../services/UserMoviesService');

class UserMoviesController{
    
    constructor(){
        this.init();
        this.route = 'userMovies';
        this.userMoviesService = new UserMoviesService();
    }

    init(){
        this.getUserMoviesByPage = this.getUserMoviesByPage.bind(this);
        this.insertUserMovies    = this.insertUserMovies.bind(this);
        this.deleteUserMovies    = this.deleteUserMovies.bind(this);
    }

    async getUserMoviesByPage(req, res, next){
        const {  protocol , params: { userId }, query } = req;
        try{
            const url = `${protocol}://${req.get('host')}/${this.route}/${userId}`;
            const userMoviePage = await this.userMoviesService.getUserMoviesByPage(url,{ userId, ...query });
            res.json(userMoviePage);
        }catch(err){
            next(err);
        }
    }

    async insertUserMovies(req, res, next){
        const { body: { userId, movieId } } = req;
        try{
            const resultId = await this.userMoviesService.insertOrUpdateUserMovies(userId,movieId);
            res.status(201).json({ resultId });
        }catch(err){
            next(err);
        }
    }

    async deleteUserMovies(req, res, next){
        const { userId, movieId } = req.params;
        try{
            const deletedCount = await this.userMoviesService.deleteUserMovies(userId,movieId);
            res.status(204).json({ deletedCount });
        }catch(err){
            next(err);
        }
    }

}

module.exports = UserMoviesController;