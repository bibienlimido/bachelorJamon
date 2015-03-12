var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Salut tout le monde !');
});

server.on('close', function() { // On écoute l'évènement close
	console.log('Bye bye !');
})

12 server.listen(8080); // Démarre le serveur

14 server.close(); // Arrête le serveur. Déclenche l'évènement close