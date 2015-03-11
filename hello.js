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
    if(page == "/"){
    	res.write('Vous etes a l\'accueil , que puis-je pour vour');
    	
    }
    else if(page == '/index'){
    	res.write('vous etes sur l\'index');
    	
    }

    res.end();
});
/*port d'écoute du serveur*/
server.listen(8080);