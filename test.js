var http = require('http');

http.createServer(function (req, res) {
	            res.writeHead(200, {'Content-Type': 'text/plain'});
	            res.end('Hello World! and this the first nodejs code:) yeah');
}).listen(8080);


