
const mongoose = require("mongoose")

const products = mongoose.model("products", new mongoose.Schema({
    title: {
        type: String,
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
    }
    ,desc:{
        type:String,
    }
}))
module.exports = { products }
