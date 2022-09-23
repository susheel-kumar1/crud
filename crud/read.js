const dbconnect = require('./mongodb')
// Read the data from data base

const read = async () => {
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);

}

read();