const mongoose = require("mongoose")
const Mainpage = new mongoose.Schema({
    logourl: String,
    bgimage: String,
    slidetitle: String,
    slidesub: String,
    trendingimage:String,
    trending: String

    // title: String, 
    // subtitle: String, 
    // trending:String
});                            //collection and schema
module.exports = mongoose.model('mainpage', Mainpage)