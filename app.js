const   express = require("express"),
        app = express(),
        port = process.env.PORT || 8000,
        cors = require('cors'),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose")



const menuRoutes = require('./routes/menu')
const orderRoutes = require('./routes/order')

app.use(cors())
//app.use(bodyParser.json())

// app.listen(process.env.PORT, process.env.IP, function() {
//     console.log("server")
// })

app.listen(port, () => {
    console.log(`I'm listening on ${port}`)
})


app.get('/', (request, response, next) => {
    response.status(200).json({message: 'i succeeded'})
    console.log('ello')
})

app.get("/menu", function(request, response) {
    let menu 
})


module.exports = app;



