const gamesData = require("../data/games.json");
const dbConnection = require("../data/dbconnection");
const ObjectId = require("mongodb").ObjectId;

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


    const db = dbConnection.get();
    // console.log("db",db);

    const gamesCollection = db.collection("games");
    // const docs=gamesCollection.find(); blocking because takes time
    gamesCollection.find().skip(offset).limit(count).toArray(function (err, games) {

        console.log("Found games", games);
        res.status(200).json(games);
    });

    


    // console.log(req,res);
    console.log("offset", offset);
    console.log("offset + count", offset + count);
    const pageGames = gamesData.slice(offset, offset + count);
    res.status(200).json(pageGames);
}

module.exports.getOne = function (req, res) {
    console.log("GET One controller called.");
    const db = dbConnection.get();
    const gamesCollection = db.collection("games");
    const gamesId = req.params.gameId;
    gamesCollection.findOne({ _id: ObjectId(gamesId) }, function (err, game) {
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
    // console.log(req.body);
    // const getIndex=req.params.gameIndex;
    // res.status(200).json(req.body);
}
