const mongoose=require("mongoose");
const Game=mongoose.model(process.env.GAME_MODEL);

const getOne=function(req,res){
    console.log("GetOne publisher controller");
    const gameId=req.params.gameId;
    Game.findById(gameId).exec(function(err,game){
        console.log("Games Found",game.publisher);
        res.status(200).json(game.publisher);
    });
}

module.exports={
    getOne
}