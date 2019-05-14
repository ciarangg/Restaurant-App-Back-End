const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const menu = require('./routes/menu.route'); // Imports routes for the menu
const user = require('./routes/user.route'); // 
const shoppingCart = require('./routes/shoppingCart.route'); 
const cors = require('cors');


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://ciarangg:Sloightwerk2@ds111940.mlab.com:11940/restaurant';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors())
app.use('/menu', menu);
app.use('/user', user);
app.use('shoppingCart', shoppingCart);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})

module.exports = app;



