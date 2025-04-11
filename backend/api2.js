
const http = require("http"); //import http module from node

// setup a server to handle request and response 

http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/json'}); // acknowledge to client about status code and response type

    let booklist = ['html', 'css', 'bootstrap', 'javascript', 'php', 'mysql', 'nodejs'];

    let jsondata = JSON.stringify(booklist); // array to json 

    res.write(jsondata); // send response to client
    res.end(); // end of response from server side 

}).listen(1111, function(){ 
    console.log("Server is live on : http://localhost:1111")
});

// http://localhost:1111

// SSR - CSR