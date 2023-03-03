const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  });
}).listen(8080);

console.log('Server running at http://localhost:8080/');
