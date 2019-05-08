const mongoose = require('mongoose')
//const Schema = mongoose.Schema


let shoppingCartSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number
})


module.exports = mongoose.model('shoppingCart', shoppingCartSchema);