//not completed

const http= require("http");
const fs=require("fs");
let statusCode;
let indexFileBuffer;
const serveIndex=function(req,res){

    res.setHeader("Content-Type","text/html");
    res.writeHead(statusCode);
    res.end(indexFileBuffer);

   fs.readFile(__dirname+"\\index.html",function(err,buffer){
    
       res.setHeader("Content-Type","text/html");
       res.writeHead(200);
       res.end(buffer);
   })
   
}
const server= http.createServer(serveIndex);

server.listen(8080, "localhost", function() {
console.log("Server is running on http://localhost:8080");
});