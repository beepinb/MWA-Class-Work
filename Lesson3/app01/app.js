require("dotenv").config();
require("./api/data/db");
require("./api/data/dbconnection").open();

const express=require("express");
const path=require("path");
const routes=require("./api/routes");

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(function(req,res,next){
  console.log(req.method,req.url);
  next();
})
 
app.use("/api",routes);

app.use(express.static(path.join(__dirname,'public')));


const server=app.listen(process.env.PORT,function(){
  console.log("server started on port ",server.address().port);
})