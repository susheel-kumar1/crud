const dbconnect = require('./mongodb')
const delete_data = async () => {

    const delet = await dbconnect();
    const del = await delet.deleteMany({ name:'We_lenovo' }
    )
    if (del.acknowledged) {
        console.log(del);
    }
}

delete_data();