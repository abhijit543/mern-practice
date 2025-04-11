
const http = require("http"); //import http module from node

// setup a server to handle request and response 

http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/html'}); // acknowledge to client about status code and response type

    let booklist = ['html', 'css', 'bootstrap', 'javascript', 'php', 'mysql', 'nodejs'];

    res.write("<h1> Book List </h1>");

    booklist.map((bookName, index)=>{
        res.write(`<p> ${bookName} </p>`);
    })
    
    res.end(); // end of response from server side 

}).listen(1111, function(){ 
    console.log("Server is live on : http://localhost:1111")
});

// http://localhost:1111/boolist
//http://localhost:1111/myboolist

// SSR - CSR