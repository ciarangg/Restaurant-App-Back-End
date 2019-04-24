const mongoose = require('mongoose')
//const Schema = mongoose.Schema


let menuSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number
})


module.exports = mongoose.model('Menu', menuSchema);