const express = require('express');
const app = express();
const https = require('https');
require('dotenv').config()
const fs = require('fs');
const port = process.env.PORT;
const cert_key = process.env.CERT_KEY;
const cert_pem = process.env.CERT_PEM;

app.get('/', (req, res) => {
    res.send("IT'S WORKING!");
});

const httpsOptions = {
    key: fs.readFileSync(cert_key),
    cert: fs.readFileSync(cert_pem)
};

const server = https.createServer(httpsOptions, app)
    .listen(port, () => {
        console.log('Server running at port ' + port);
    });