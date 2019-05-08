const mongoose = require('mongoose')
//const Schema = mongoose.Schema


let userCustomerSchema = new mongoose.Schema({
    name: String,
})


module.exports = mongoose.model('userCustomer', userCustomerSchema);