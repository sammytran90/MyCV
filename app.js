const express = require('express');
const app = express();

var fs = require('fs');
var pdf = require('html-pdf');
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '4000mb' }));
app.get("/", (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, 'assets', 'index.html')));
})

var PORT = 3000;
app.listen(PORT, () => {
    console.log('listen to port: ' + PORT);
})