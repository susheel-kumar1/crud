// DB Connection Code
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm';

async  function dbconnect() {
    // this is show we connect with mongodb
    let result = await client.connect();
    // this is show we connect with mongodb database by name 
    let db = result.db(database);
    // this is show we connect with database collection by:--products
    return  db.collection('products');

   
}


module.exports = dbconnect;

// let response= await collection.find({}).toArray();
    // console.log(response)

// Find Code
// const Readfunction= async ()=>{
// let data= await dbconnection();
// data=await data.find().toArray()
// console.log(data)

// }

// Readfunction();

