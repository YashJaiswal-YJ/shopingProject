const express = require("express")
const app = express()
const port = 4000
const hbs = require("hbs")
const mongoose = require("mongoose") //for Db connection
const routes = require('./routes/main') // we have imported routes from route folder  to here
const detail = require("./models/detail")
const Slider = require("./models/slider")
const Mainpage = require("./models/mainpage")
const Product = require("./models/product")


//middlewere
app.use('/static',express.static("public")) // to use static file 
app.use('', routes) // now we have used the route in app

//db connection
const connectionstring = "mongodb+srv://jaiswalyj414:yashjaiswal@nodejsproject.z1niegs.mongodb.net/website_tut?retryWrites=true&w=majority"
// mongoose
//     .connect(connectionstring)
//     .then(()=> console.log('Db Connected......'))
//     .catch((err)=> console.log(err))

main().catch(err => console.log(err));
async function main(){ //using to connect db and using callback
    await mongoose.connect(connectionstring)
    console.log('Db Connected......')
    
    // Product.create([
    //     {
    //         image: "static/image/p1.png",
    //         name: "Men's Shirt",
    //         price: "$75",
    //     },
    //     {
    //         image: "static/image/p2.png",
    //         name: "Men's Shirt",
    //         price: "$80",
    //     },
    //     {
    //         image: "static/image/p3.png",
    //         name: "Women Dress",
    //         price: "$65",
    //     },
    //     {
    //         image: "static/image/p4.png",
    //         name: "Women Dress",
    //         price: "$80",
    //     },
    //     {
    //         image: "static/image/p5.png",
    //         name: "Women Dress",
    //         price: "$70",
    //     },
    //     {
    //         image: "static/image/p6.png",
    //         name: "Women Dress",
    //         price: "$80",
    //     },
    //     {
    //         image: "static/image/p7.png",
    //         name: "Men's Shirt",
    //         price: "$75",
    //     },
    //     {
    //         image: "static/image/p8.png",
    //         name: "Men's Shirt",
    //         price: "$65",
    //     },
    //     {
    //         image: "static/image/p9.png",
    //         name: "Men's Shirt",
    //         price: "$70",
    //     },
    //     {
    //         image: "static/image/p10.png",
    //         name: "Men's Shirt",
    //         price: "$75",
    //     },
    //     {
    //         image: "static/image/p11.png",
    //         name: "Men's Shirt",
    //         price: "$55",
    //     },
    //     {
    //         image: "static/image/p12.png",
    //         name: "Women Dress",
    //         price: "$95",
    //     }
    // ])


    // Mainpage.create({
    //     logourl: "static/image/logo.png",
    //     bgimage: "static/image/slider-bg.jpg",
    //     slidetitle: "Sale 50% Off, On Mens Wear",
    //     slidesub: "Best selling clothes in main. our featured products are shirts, tshirt and jeans. Get 20% - 50% off in these section",
    //     trendingimage:"static/image/arrival-bg.png",
    //     trending: "wait for the new arrival, having a extreem demand in new fashion products and ensuring bet fit"
    // })


    // Mainpage.create({
    //     title: "Sale 50% Off, On Mens Wear", 
    //     subtitle: "Best selling clothes in main. our featured products are shirts, tshirt and jeans. Get 20% - 50% off in these section", 
    //     trending:"wait for the new arrival, having a extreem demand in new fashion products and ensuring bet fit"
    // });

    // Slider.create([
    //     {
    //     title: "Learn Java in very easy manner",
    //     subtitle: "Java is one of the most popular programing language",
    //     imageurl: "/static/image/s1.png"
    //     },
    //     {
    //         title: "What is Django in python?",
    //         subtitle: "Django is most famous web framework of python programming",
    //         imageurl: "/static/image/s2.png"
    //     },
    //     {
    //         title: "Learn javascript in easy formate with guide",
    //         subtitle: "Current version of javascript is ES6 go on and learn",
    //         imageurl: "/static/image/s3.png"
    //     },
    // ])
    // detail.create({
    //     // brandname: "info tech solution",
    //     // brandiconurl:"https://yt3.googleusercontent.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s176-c-k-c0x00ffffff-no-rj",
    //     titleslide: 'Sale 50% Off, On Mens Wear',
    //     subtitleslide: 'Best selling clothes in main. our featured products are shirts, tshirt and jeans. Get 20% - 50% off in these section',
    //     trending: 'wait for the new arrival, having a extreem demand in new fashion products and ensuring bet fit',
    //     links: [{
    //             hello: 'String',
    //         }]
    // })
}   
//(template engine) hbs
app.set('view engine', 'hbs')
app.set("views", "view")
hbs.registerPartials("view/partials")
    


app.listen(port, () =>{
    console.log(`server has start in port ${port}`);
})