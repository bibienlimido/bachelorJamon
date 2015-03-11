/*Chargement du serveur*/
var http = require('http');
/*Demande l'url*/
var url = require("url");

/*Le serveur repond 200 et un html*/
var server = http.createServer(function(req, res) {
	/*stocke la page demander*/
	var page = url.parse(req.url).pathname;
	/*log dans la console*/
	console.log(page);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
'<html>'+
'    <head>'+
'        <meta charset="utf-8" />'+
'        <title>Ma page Node.js !</title>'+
'    </head>'+ 
'    <body>'+
'     	<p>Voici un paragraphe <strong>HTML</strong> !</p>'+
'    </body>'+
'</html>');
    res.end();
});
/*port d'écoute du serveur*/
server.listen(8080);