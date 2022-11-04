import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb://127.0.0.1:27017/my_blog`);
    await client.connect();
    db = client.db('my_blog');
    cb();
}

export {
    db,
    connectToDb,
};

// mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@blog_using_react/?retryWrites=true&w=majority