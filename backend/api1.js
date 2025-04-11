
const http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/html'});

    res.write("<h1> The Node Server is Live </h1>");
    res.write("<p> The Node Server Running </p>");
    res.end();

}).listen(1111);

// http://localhost:1111