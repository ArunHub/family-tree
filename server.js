var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/home', (request, response) => {
    response.send("hi");
})

app.listen(3000);