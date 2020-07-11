var express = require('express');
var app = express();

app.use(express.static('public'));

// //setup for local development
// app.get("/data", function (req, res) {
//     const content = require('./service/content.json');
//     res.send(content);
// });

app.listen(3000);