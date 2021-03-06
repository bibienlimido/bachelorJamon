/*Chargement du serveur*/
var http = require('http');
/*Demande l'url*/
var url = require("url");
/*recupère des parametres*/
var querystring = require('querystring');

/*Le serveur repond 200 et un html*/
var server = http.createServer(function(req, res) {
	/*stocke la page demander*/
	var page = url.parse(req.url).pathname;
	/*log dans la console*/
	console.log(page);
	/*Recupère les parametre et les stocke dans un tableau*/
	var params = querystring.parse(url.parse(req.url).query);
	res.writeHead(200, {
		"Content-Type": "text/html"
	});
	if (page == "/") {
		res.write('Vous etes a l\'accueil , que puis-je pour vour');

	} else if (page == '/index') {
		res.write('vous etes sur l\'index');
		/*test si le tableau contient des éléments avec les alias nom prenom*/
		if ('prenom' in params && 'nom' in params) {
			res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
		} else {
			res.write('Vous devez bien avoir un prénom et un nom, non ?');
		}


	}

	res.end();
});
/*port d'écoute du serveur*/
server.listen(8080);