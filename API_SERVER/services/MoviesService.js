const MongoLib = require('../lib/mongodb');
const { config } = require('../config');

class MoviesService{
    constructor(){
        this.collection = 'movies';
        this.pageSize = parseInt(config.pageSize);
        this.client = new MongoLib();
    }

    async getMovieById(id){
        const idArray = id.replace('[','').replace(']','').split(',').map(val => parseInt(val));
        const movieData = await this.client.selectById(this.collection,{ id: { '$in': idArray }});
        return movieData
    }

    async getMoviesByPage(baseUrl,query){
        const { page, prepareQuery } = this.prepareMongoQuery(query);
        const pageResults = await this.getPaginateAnswer(page, baseUrl, query, prepareQuery);

        return pageResults;
    }

    async insertMovie(userModel){
        const created = new Date();
        const id = (await this.client.getTheLastId(this.collection)) + 1;
        const insertedId = await this.client.insert(this.collection,{ id, ...this.setNumberPropertiesToInt(userModel), created });
        return insertedId;
    }

    async updateMovie(id, userModel){
        const modifiedCount = await this.client.update(this.collection,parseInt(id),this.setNumberPropertiesToInt(userModel));
        return modifiedCount;
    }

    async deleteMovie(id){
        const deletedCount = await this.client.delete(this.collection,parseInt(id));
        return deletedCount;
    }

    setNumberPropertiesToInt(userModel){
        userModel.year = parseInt(userModel.year);
        userModel.duration = parseInt(userModel.duration);
        return userModel;    
    }

    prepareMongoQuery(query){
        const { tags } = query;
        let   { page } = query;

        const prepareQuery = {};

        page = (page && page>1)? page : 1;
        (typeof tags==='string') && (prepareQuery.tags = { '$all': tags.replace('[','').replace(']','').split(',') });

        return { page, prepareQuery };
    }

    async getTotalMovies(query={}){
        const totalMovies = await this.client.getToTalDocuments(this.collection,query);
        return totalMovies;
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

    async getMovieArray(prepareQuery,page){
        const movieArray = await this.client.select(this.collection,prepareQuery,this.pageSize,page);
        return movieArray;
    }

    async getPaginateAnswer(page, baseUrl, query, prepareQuery){
        let pageResults = {};
        const count = await this.getTotalMovies(prepareQuery);
        const pages = Math.ceil(count/this.pageSize);

        if(page<=pages){
            const movieArray = await this.getMovieArray(prepareQuery,page-1);
            const fullUrl = this.getFullUrl(baseUrl,query);
            const { prev, next } = this.getPrevAndNextUrls(page,count,fullUrl);
            pageResults = {
                "info":{ count, pages, next, prev },
                "results": movieArray,
            }
        }else{
            pageResults = { 'error': 'There is nothing here', results:[] };
        }

        return pageResults
    }
}

module.exports = MoviesService;