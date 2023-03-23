const express = require('express')
const routes = express.Router()
//now routes consist of router method from express

const detail = require("../models/detail")
const Slider = require("../models/slider")
const Mainpage = require("../models/mainpage")
const Product = require("../models/product")


routes.get("/", async (req, res)=>{
   const details = await detail.find();
   const slides = await Slider.find();
   const mainpage = await Mainpage.find();
   const product = await Product.find();

   console.log(mainpage);
//    console.log(details);
    res.render("index", {
        // details: details,
        // slides: slides,
        mainpage: mainpage,
        product: product
    });
});
routes.get("/gallery", async(req, res)=>{
    const details = await detail.findOne({"_id": "640cc09c5355f1983d82e57e"})
    res.render("gallery", {
        details: details,
    }) 
})
routes.get("/about", async(req, res)=>{
    res.render("about")
})
routes.get("/product", async(req, res)=>{
    res.render("product")
})
routes.get("/bloglist", async(req, res)=>{
    res.render("bloglist")
})
routes.get("/contactus", async(req, res)=>{
    res.render("contactus")
})

module.exports = routes  //we have exported routes 