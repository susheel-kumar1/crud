const dbconnect = require('./mongodb')
//  inserting the data in database..


const insert = async () => {
    const get_data = await dbconnect();
    const result = await get_data.insertMany(

        [
            
        { name: "nisha", brand: "apple", price: 45344, catogery: 'mobile', model: 'iphone-11+' },
        { name: "Rama", brand: "Nokia", price: 1144, catogery: 'mobile', model: 'lumia23' },
        { name: "Rashid krishna", brand: "We_lenovo", price: 11344, catogery: 'mobile', model: 'GT-99' }

        ]
    )

    if (result.acknowledged) {
        console.log('data inserted')
    }
    else {
        ' Not inserted data'
    }
}

insert()

