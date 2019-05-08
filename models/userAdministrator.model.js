const mongoose = require('mongoose')
//const Schema = mongoose.Schema


let userAdministratorSchema = new mongoose.Schema({
    name: String
})


module.exports = mongoose.model('userAdministrator', userAdministratorSchema);