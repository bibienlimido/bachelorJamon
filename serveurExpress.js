var express = require('express');
2
3var app = express();
4
5app.get('/', function(req, res) {
6    res.setHeader('Content-Type', 'text/plain');
7    res.end('Vous êtes à l\'accueil');
8});
9
10app.listen(8080);