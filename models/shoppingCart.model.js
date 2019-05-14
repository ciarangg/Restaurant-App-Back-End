const mongoose = require('mongoose')
//const Schema = mongoose.Schema


let shoppingCartSchema = new mongoose.Schema({
    time: { type: Number, default: (new Date()).getTime() } ,
    price: Number,
    content: Array

})


module.exports = mongoose.model('shoppingCart', shoppingCartSchema);