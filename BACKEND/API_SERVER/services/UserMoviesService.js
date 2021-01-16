const MoviesService = require('../services/MoviesService');
const { ObjectId } = require('mongodb');
const MongoLib = require('../lib/mongodb');
const { config } = require('../config');

class UserMoviesService{

    constructor(){
        this.collection = 'user.movies';
        this.pageSize = parseInt(config.pageSize);
        this.client = new MongoLib();
        this.moviesService = new MoviesService();
    }

    async getUserMoviesByPage(baseUrl, query){
        const { page, prepareQuery } = await this.prepareMongoQuery(query);
        const pageResults = await this.getPaginateAnswer(page, baseUrl, query, prepareQuery);
    
        return pageResults;
    }

    async insertOrUpdateUserMovies(userId,movieId){
        let result = 0;
        if(await this.isMovieInDatabase(movieId)){
            result = await this.existRecord(userId)? 
                        await this.updateUserMovies(userId,movieId) 
                        :await this.insertUserMovies(userId,movieId);
        }
        return result;
    }

    async deleteUserMovies(userId,movieId){
        let result = 0;

        if(this.existRecord(userId)){
            const userMoviesModel = await this.getUserMoviesRecord(userId);
            userMoviesModel.movies = userMoviesModel.movies.filter( id => id !== parseInt(movieId) );
            const modifiedCount = await this.client.update(this.collection,userMoviesModel.id,{ movies: userMoviesModel.movies });
            result = modifiedCount? movieId : result;  
        }

        return result;
    }

    async isMovieInDatabase(movieId){
       return Boolean(await this.moviesService.getTotalMovies({ id: movieId }));
    }

    async getUserMoviesRecord(userId){
        const [ data ] = await this.client.selectById(this.collection,{ user_id:ObjectId(userId) });
        return data;
    }

    async existRecord(userId){
        return await this.client.getToTalDocuments(this.collection,{ user_id:ObjectId(userId) });
    }

    isMovieInArray = (userMoviesModel,movieId) => userMoviesModel.movies.filter( id => id === movieId ).length;

    async updateUserMovies(userId,movieId){
        const userMoviesModel = await this.getUserMoviesRecord(userId);
        const modifiedCount = !this.isMovieInArray(userMoviesModel,movieId) && await this.client.update(this.collection,userMoviesModel.id,{ movies: [...userMoviesModel.movies,movieId] });
        return modifiedCount? movieId : 0;
    }

    async insertUserMovies(userId,movieId){
        const created = new Date();
        const id = (await this.client.getTheLastId(this.collection)) + 1;
        const insertedId = await this.client.insert(this.collection,{ id, user_id: ObjectId(userId), movies: [movieId], created });
        return insertedId? movieId : 0;
    }

    async prepareMongoQuery(query){
        const { userId, tags } = query;
        let   { page } = query;
    
        const prepareQuery = {};
        const data = await this.getUserMoviesRecord(userId);
        const movies = data? data.movies : [];

        page = (page && page>1)? page : 1;
        prepareQuery.id = { '$in': movies };
        (typeof tags==='string') && (prepareQuery.tags = { '$all': tags.replace('[','').replace(']','').split(',') });

        return { page, prepareQuery };
    }

    getFullUrl(baseUrl,query){
        let { tags } = query;
        let fullUrl = `${baseUrl}?`;

        (typeof tags==='string') && (fullUrl += `tags=${tags}&`);

        return fullUrl;
    }

    getPrevAndNextUrls(page,count,fullUrl){
        const next = (count-(this.pageSize*page))>0? `${fullUrl}page=${page+1}` : null;
        const prev = (page===1)? null : `${fullUrl}page=${page-1}`;

        return { prev, next };
    }

    async getPaginateAnswer(page, baseUrl, query, prepareQuery){
        let pageResults = {};
        const count = await this.moviesService.getTotalMovies(prepareQuery);
        const pages = Math.ceil(count/this.pageSize);

        if(page<=pages){
            const movieDataArray = await this.moviesService.getMovieArray(prepareQuery,page-1);
            const fullUrl = this.getFullUrl(baseUrl,query);
            const { prev, next } = this.getPrevAndNextUrls(page,count,fullUrl);
            pageResults = {
                "info":{ count, pages, next, prev },
                "reults": movieDataArray,
            }
        }else{
            pageResults = { 'error': 'There is nothing here' };
        }

        return pageResults
    }
}

module.exports = UserMoviesService;