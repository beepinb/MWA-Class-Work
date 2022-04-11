const express=require("express");
const router=express.Router();
const gamesController=require("../controllers/games.controllers");
router.route("/games")
.get(gamesController.getAll) //.get((req,res)=>gamesController.getAll(req,res));
.post(gamesController.addOne)
// .post(function(req,res){
//     res.status(200).json("{'Json Data': 'POST'}");
// });


router.route("/games/:gameIndex")
.get(gamesController.getOne);

module.exports=router;