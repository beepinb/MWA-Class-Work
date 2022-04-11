const express=require("express");
const path=require("path");
const fs=require("fs");
require("dotenv").config();
const app=express();

app.use(function(req,res,next){
  console.log(req.method,req.url);
  next();
})

app.use(express.static(path.join(__dirname,'public')));
app.get("/json",function(req,res){
    res.status(200).json("{'Json Data': true}");
})


const server=app.listen(process.env.PORT,function(){
  console.log("server started on port ",server.address().port);
})