const express=require("express");
const app=express();
app.set("port",4000)

//blocking way
// app.listen(app.get("port"));
// console.log("listening to port",server.address().port);

//non-blocking way
const server=app.listen(app.get("port"),function(){

    console.log("listening to port",server.address().port);
});