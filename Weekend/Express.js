const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(request, response){
  response.send("Hello World!");
});

app.get("/Parks", function(request,response){
  response.send("Parks Visited");
});

//create a server on a local host like this:
app.listen(port, function (){
  console.log("Server running");
});


//creating server WITHOUT any packages
//load HTTP module
const http = require("http");
const host = "127.0.0.1";
const port = 3000;

//create HTTP server and listen on port for requests
const server = http.createServer((request, response) => {
  //set the response HTTP header with HTTP status and content type
  response.statusCode = 200; //Success
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello World\n");
});

//listen for request on port, and as a callback function have to port listened on logged
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
})