const mongoose = require('mongoose')
//const Schema = mongoose.Schema


let userSchema = new mongoose.Schema({
    name: String,
    location: String,
    userType: String
})


module.exports = mongoose.model('userCustomer', userSchema);