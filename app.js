const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const menu = require('./routes/menu.route'); // Imports routes for the menu

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://ciarangg:Sloightwerk2@ds111940.mlab.com:11940/restaurant';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/menu', menu);



app.listen(port, () => {
    console.log(`I'm listening on ${port}`)
})




module.exports = app;



