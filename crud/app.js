const express = require('express');
const app = express();
const dbconnect = require('./mongodb')
const fs = require('fs');
const paths = require('path')
const bodyParser = require('body-parser')

//  auto and static port server..
const ports = process.env.Port || 5000;

const publicpath = paths.join(__dirname, 'public');
const view_path = paths.join(__dirname, 'views');

app.use(express.static(publicpath));

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

app.set("view engine", "ejs")

app.get('/', async (req, resp) => {

    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
    resp.render('index',{data})

})

app.get('/about', (req, resp) => {
    resp.render('about')
})

app.get('/login', (req, resp) => {
    resp.render('login')
})

app.get('/ourteam', (req, resp) => {
    resp.render('ourteam')
})

app.get('/contact', (req, resp) => {
    resp.render('contact')
})



// app.get('/info', async (req, resp) => {
//     let data = await dbconnect();
//         data = await data.find().toArray();
//         console.log(data);
    
//     resp.send(data)

// })

// Promise Code 
// app.get('/about', (req, resp) => {

//     let a = 20;
//     let b = 10;

//     let waitdata = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(60)
//         }, 2000)

//     })


//     waitdata.then((b) => {
//         console.log(a + b);

//     })

// console.log("see now the query params")
//     resp.send("see now"+req.query.name)


// })


// globle and non-globle modules...
// console.log('this is golble module due to is not import...');

// // this is not 
// fs.writeFileSync('nody.js'," code acharya") 

// console.log(__dirname,  __filename ,"this is also core and globle module")

// const dir_name=path.join(__dirname);



// var total_price = 100;
// var total_weight = 2000;
// app.get('/', (req, resp) => {
//     const appledata = (ram, sham, rahim) => {
//         console.log("Distribution Result")
//         const ram_get_total_weight = total_weight * ram / total_price;
//         console.log(ram_get_total_weight + "( RAM)")
//         const four_100_gm = ram_get_total_weight / 100 * 40;
//         const two_100_gm = ram_get_total_weight / 100 * 20;
//         console.log(`RAM:-- ${four_100_gm}, ${four_100_gm}, ${two_100_gm}`)

//         //  sham

//         const sham_get_total_weight = total_weight * sham / total_price;
//         console.log(sham_get_total_weight + " (SHAM)");
//         const three_100_gm = sham_get_total_weight / 2;
//         console.log(`Sham:-- ${three_100_gm} ,${three_100_gm}  `);

//         // rahim

//         const rahim_get_total_weigth = total_weight * rahim / total_price;
//         const two_100_gms = rahim_get_total_weigth / 2;
//         console.log(rahim_get_total_weigth + " (RAHIM)")
//         const one_100_gm = two_100_gms / 2;
//         console.log(`Rahim:-- ${two_100_gms}, ${one_100_gm}, ${one_100_gm}`)

//     }

//     appledata(50, 30, 20)

//     const coode = getdata_db();


//     resp.send("data")
// })

// const delete_data = async () => {

//     const delet = await dbconnect();
// const del= await delet.deleteOne({name:'Rashid'}
// )
// if(del.acknowledged){

//     console.log("del");
// }

// }

// delete_data(); 


const update_data = async () => {
    const updata = await dbconnect();
    const onlydata = await updata.updateMany({ model: 'GT-99' }, {
        $set: { catogery: ' smart phone ', price: 6768, }
    })

    if (onlydata.acknowledged) {
        console.log(onlydata)
    }
}

update_data();

app.listen(ports, () => {
    console.log(`run the server ${ports}`);

})