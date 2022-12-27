// const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");


const uri = process.env.MONGODB_SRV;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

// mongoose.set('strictQuery', true);

// Database Name
const dbName = "king-james-fx";
let db

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    db = client.db(dbName);

    return "done. m";
}

function connectDB(){
    main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
}

module.exports = { connectDB, db};
