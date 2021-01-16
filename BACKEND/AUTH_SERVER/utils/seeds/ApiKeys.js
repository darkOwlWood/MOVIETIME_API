const { MongoClient } = require('mongodb');
const crypto = require('crypto');

const COLLECTION = 'api.keys';

const [ , , USER, PASSWORD, HOST, DB ] = process.argv;

const URI = `mongodb://${USER}:${PASSWORD}@${HOST}/${DB}`;

const adminScpopes = [
    'movies:read',
    'movies:create',
    'movies:update',
    'movies:delete',
    'user-movies:read',
    'user-movies:create',
    'user-movies:delete',
];

const userScopes = [
    'movies:read',
    'user-movies:read',
    'user-movies:create',
    'user-movies:delete',
];

const ApiKeys = [
    {
        token: generateRandomToken(),
        scopes: adminScpopes,
    },
    {
        token: generateRandomToken(),
        scopes: userScopes,
    }
];

function generateRandomToken(){
    return crypto.randomBytes(20).toString('hex');
}

(async () => {
    try{
        const client = MongoClient(URI, { useUnifiedTopology:true, useNewUrlParser:true });
    
        const connection = await new Promise( (resolve, reject) => {
            client.connect( err => {
                if(err){
                    console.error(err);
                    reject(err);
                    return;
                }
                console.log('Connection was made successfully!!!');
                resolve(client.db(DB));
            });
        });

        const ids = (await connection.collection(COLLECTION).insertMany(ApiKeys)).insertedIds;
        console.log(ids);

        process.exit(0);
    }catch(err){
        console.error(err);
        process.exit(-1);
    }
})();