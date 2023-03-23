const mongoose = require("mongoose")
const Product = new mongoose.Schema({

    image: String,
    name: String,
    price: String,
});                            //collection and schema
module.exports = mongoose.model('product', Product)