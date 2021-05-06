const { MongoClient } = require('mongodb');
const { MovieList } = require('./movies');

const [, , DEV, HOST, DB, COLLECTION, USER, PASSWORD] = process.argv;

const URI = DEV === 'development' ? `mongodb://${HOST}/${DB}` : `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB}`;

const insertIdToListItems = list => list.map((obj, ndx) => ({ id: ndx + 1, ...obj }));

(async () => {
    const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const resp = await client.db(DB).collection(COLLECTION).insertMany(insertIdToListItems(MovieList));
    Object.keys(resp.insertedIds).forEach(id => console.log(resp.insertedIds[id]));
})();