const axios = require('axios');
const { config } = require('../config');

class ApiServerController{
    constructor(){
        this.cookieName = 'idprot';
        this.route = 'apiserver';
        this.URL = `${config.protocol}://${config.apiServer}`;
        this.init();
    }

    init(){
        this.getMoviesById    = this.getMoviesById.bind(this);
        this.getMovies        = this.getMovies.bind(this);
        this.getUserMovies    = this.getUserMovies.bind(this);
        this.insertUnserMovie = this.insertUnserMovie.bind(this);
        this.deleteUserMovie  = this.deleteUserMovie.bind(this);
    }

    async getMoviesById(req, res, next){
        try{
            const { id } = req.params;
            const endpoint = 'movies';
            
            const resp = await axios.get(`${this.URL}/${endpoint}/${id}`);
            const movieData = resp.data;

            res.send(movieData);
        }catch(err){
            next(err);
        }
    }

    async getMovies(req, res, next){
        try{
            const { protocol, query:{ page=1 } } = req;
            const endpoint = 'movies';
            const baseUrl = `${protocol}://${req.get('host')}/${this.route}/${endpoint}`;

            const resp = await axios.get(`${this.URL}/${endpoint}?page=${page}`);
            let movieData = resp.data;

            movieData = this.refactorPages(movieData,baseUrl,page);


            res.send(movieData);
        }catch(err){
            next(err);
        }
    }

    async getUserMovies(req, res, next){
        try{
            const { protocol, query:{ page=1 } } = req;
            const { code, jwt } = req.signedCookies[this.cookieName];
            const userId = code.split(':')[0];
            const endpoint = 'userMovies';
            const baseUrl = `${protocol}://${req.get('host')}/${this.route}/${endpoint}`;

            const resp = await axios.get(`${this.URL}/${endpoint}/${userId}?page=${page}`,{ headers:{ Bearer: jwt } });
            let userMoviePage = resp.data;

           userMoviePage = this.refactorPages(userMoviePage,baseUrl,page);

            res.send(userMoviePage);
        }catch(err){
            next(err);
        }
    }

    async insertUnserMovie(req, res, next){
        try{
            const { body: { movieId } } = req;
            const { code, jwt } = req.signedCookies[this.cookieName];
            const userId = code.split(':')[0];
            const endpoint = 'userMovies';

            const resp = await axios.post(`${this.URL}/${endpoint}`, { userId, movieId }, { headers:{ Bearer: jwt } });
            const { status, data:{ resultId } } = resp;

            res.status(status).json({ resultId });
        }catch(err){
            next(err);
        }
    }

    async deleteUserMovie(req, res, next){
        try{
            const { id:movieId } = req.params;
            const { code, jwt } = req.signedCookies[this.cookieName];
            const userId = code.split(':')[0];
            const endpoint = 'userMovies';

            const resp = await axios.delete(`${this.URL}/${endpoint}/${userId}/${movieId}`, { headers:{ Bearer: jwt } });
            const { status, data:{ deletedCount } } = resp;

            res.status(status).json({ deletedCount });
        }catch(err){
            next(err);
        }
    }

    refactorPages(respData,baseUrl,page){
        respData.info.next = respData.info.next? `${baseUrl}?page=${parseInt(page)+1}` : null;
        respData.info.prev = respData.info.prev? `${baseUrl}?page=${parseInt(page)-1}` : null; 

        return { ...respData };
    }
}

module.exports = ApiServerController;