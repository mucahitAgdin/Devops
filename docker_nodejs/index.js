//Load express module with `require` directive
const express = require('express')
const app = express()

require('dotenv').config()

//Read port number from .env
const port = process.env.PORT
//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.send("hello world")
})

//Launch listening server on port 8081
app.listen(port, function () {
    console.log('app listening on port ' + port)
})