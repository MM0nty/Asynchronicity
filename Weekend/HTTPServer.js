var http=require('http') //Calls the http library
//The basic functionality of the require function is that it reads a JavaScript file, executes the file, and then proceeds to return the exports object. So in this case, since we want to use the functionaility of the http module, we use the require function to get the desired functions from the http module so that it can be used in our application
var server=http.createServer((function(request,response) //Creates the server using the http library
//In this line of code, we are creating a server application which is based on a simple function. This function is called whenever a requeset is made to our server application
{
  response.writeHead(200, //Sets the content header
    //When a reeuqest is received, we are saying to send a response with a header type of '200'. This number is the normal response which is sent in an http header when a successful response is sent to the client
    {"Content-Type": "text/plain"});
  response.end("Hello World\n"); //Sends the string to the response
  //In the response itself, we are sending the string 'Hello World'
}));
server.listen(3000); //Makes the server listen on port 3000
//We are then using the server.listen function to make our server application listen to client requests on port number 3000. You can specify any available port over here

//'npm install request' to download and install request modules
var request = require("request"); //Uses the request module
//This module has the necessary functions which can be used to make GET requests to websites.
request("http://www.google.com", function(error, response, body) //Makes a GET request to google.com
//We are making a GET to wwww.google.com and subsequently calling a function when a response is received. When a response is received the parameters(error,response, and body) will have the following values
//Error - In case there is any error recevied when using the GET request, it will be recorded here
//Response - The response will have the http headers which are sent back in the response
//Body - The body will contain the entire content of the response sent by google
{
  console.log(body); //Sends the response from google to console.log
  //We are writing the content received in the body parameter to the console.log file.
});