const gamesData = require("../data/games.json");
const dbConnection = require("../data/dbconnection");
// const ObjectId = require("mongodb").ObjectId;
const mongoose=require("mongoose");
const Game=mongoose.model(process.env.GAME_MODEL);

module.exports.getAll = function (req, res) {
    console.log("GET All controller called.");
    let offset = 0;
    let count = 5;
    console.log(req.query.offset);
    console.log(req.query.count);
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    Game.find().skip(offset).limit(count).exec(function(err,games){
        console.log("Found Games");
        res.status(200).json(games);
    })
}

module.exports.getOne = function (req, res) {
    console.log("GET One controller called.");
    const gamesId = req.params.gameId;
    Game.findById(gamesId).exec(function(err,game){
        console.log("Game Found");
        res.status(200).json(game);
    })
}
module.exports.addOne = function (req, res) {
    console.log("Add One called.");
    const db = dbConnection.get();
    const gamesCollection = db.collection("games");
    let newGame = {};
    if (req.body && req.body.title && req.body.price) {
        newGame.title = req.body.title;
        newGame.price = parseFloat(req.body.price);

        gamesCollection.insertOne(newGame, function (err, savedGame) {
            if (err) {
                res.status(500).json({ error: err })
            } else {
                console.log("Games Saved");
                console.log(savedGame);
                res.status(201).json(savedGame);
            }
        });
    }else{
        res.status(400).json({ message: "Game with title  and price must be provided" });
    }
}
