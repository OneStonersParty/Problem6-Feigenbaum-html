var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  if (filename == "./")
    filename = "index.html"
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
  	var fileext = 'html';
  	if (filename.endsWith('css'))
  		fileext = 'css';
    res.writeHead(200, {'Content-Type': 'text/' + fileext});
    res.write(data);
    return res.end();
  });
}).listen(8080);
