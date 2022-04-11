const dbConnection = require("../data/dbconnection");

const mongoose = require("mongoose");
const Game = mongoose.model(process.env.GAME_MODEL);

module.exports.getAll = function (req, res) {
    console.log("GET All controller called.");
    const response = {
        status: 200,
        message: {}
    };
    let offset = 0;
    let count = 5;
    const maxCount = 10;
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (isNaN(offset) || isNaN(count)) {
        console.log("Offset or count is not a number");
        response.status = 400;
        response.message = { message: "offset and count must be digits" };
    }
    else if (count > maxCount) {
        // count=maxCount;
        console.log("count greater than max");
        response.status = 400;
        response.message = { message: "count must be less than 10" };
    }
    if (response.status !== 200) {
        res.status(response.status).json(response.message);
    }
    else {
        Game.find().skip(offset).limit(count).exec(function (err, games) {
            if (err) {
                console.log("Error reading games");
                response.status = 500;
                response.message = err;
            } else {
                console.log("Found Games");
                response.status = 200;
                response.message = games;
            }
            res.status(response.status).json(response.message);
        });
    }
}

module.exports.getOne = function (req, res) {
    console.log("GET One controller called.");
    const gamesId = req.params.gameId;
    let valid = mongoose.isValidObjectId(gamesId);
    if (valid) {
        Game.findById(gamesId).exec(function (err, game) {
            if (err) {
                console.log("Error reading games");
                res.status(500).json(err);
            } else {
                if (game) {
                    console.log("Game Found");
                    res.status(200).json(game);
                } else {
                    console.log("Game is null");
                    res.status(404).json({ message: "Game with given Id not found" });
                }
            }
        })
    }
    else {
        console.log("Invalid game id");
        res.status(404).json({ message: "Invalid game id" });
    }
}
module.exports.addOne = function (req, res) {
    console.log("Game AddOne request");
    const newGame = {
        title: req.body.title, year: req.body.year, rate: req.body.rate, price: req.body.price,
        minPlayers: req.body.minPlayers, maxPlayers: req.body.maxPlayers,
        publisher: { name: "NoName" }, reviews: [], minAge: req.body.minAge,
        designers: [req.body.designers]
    };
    Game.create(newGame, function (err, game) {
        const response = { status: 201, message: game };
        if (err) {
            console.log("Error creating game");
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}



_replaceCallback = function (err, game, req, res, response) {
    if (err) {
        console.log("Error reading games");
        response.status = 500;
        response.message = err;
        res.status(response.status).json(message);
    } else {
        if (game) {
            console.log("Game Found");
            //res.status(200).json(game);
            //do update

            game.title = req.body.title;
            game.year = req.body.year;
            game.rate = req.body.rate;
            game.price = req.body.price;
            game.minPlayers = req.body.minPlayers;
            game.maxPlayers = req.body.maxPlayers;
            game.minAge = req.body.minAge;
            game.publisher = req.body.publisher;
            game.designers = [req.body.designers];


            game.save(function (err, savedGame) {
                if (err) {
                    console.log("Error reading games");
                    response.status = 500;
                    response.message = err;
                    // res.status(500).json(err);
                } else {
                    console.log("Game Updated");
                    response.status = 200;
                    response.message = savedGame;
                }
                // res.status(response.status).json(response.message);
            })
        } else {
            console.log("Game is null");
                    response.status = 404;
                    response.message = { message: "Game with given Id not found" };
                    res.status(response.status).json(response.message);
        }
        res.status(response.status).json(response.message);
    }
}



_updateOne=function(req,res,updateCallback){
    const response = {
        status: 200,
        message: {}
    };

    const gamesId = req.params.gameId;
    let valid = mongoose.isValidObjectId(gamesId);
    if (valid) {
        Game.findById(gamesId).exec((err, game) => updateCallback(err,game,req,res,response))
    }
    else {
        console.log("Invalid game id");
        res.status(404).json({ message: "Invalid game id" });
    }
}

module.exports.replaceOne = function (req, res) {
    console.log("Full update one game controller");
    _updateOne(req,res,_replaceCallback);
    // _replaceCallback(err, game, req, res, response)

}

module.exports.partialUpdate = function (req, res) {
    console.log("Full update one game controller");
    const response = {
        status: 200,
        message: {}
    };

    const gamesId = req.params.gameId;
    let valid = mongoose.isValidObjectId(gamesId);
    if (valid) {
        Game.findById(gamesId).exec(function (err, game) {
            if (err) {
                console.log("Error reading games");
                res.status(500).json(err);
            } else {
                if (game) {
                    console.log("Game Found");
                    //res.status(200).json(game);
                    //do update

                    game.title = req.body.title || game.title;
                    game.year = req.body.year || game.year;
                    game.rate = req.body.rate || game.rate;
                    game.price = req.body.price || game.price;
                    game.minPlayers = req.body.minPlayers || game.minPlayers;
                    game.maxPlayers = req.body.maxPlayers || game.maxPlayers;
                    game.minAge = req.body.minAge || game.minAge;
                    game.publisher = req.body.publisher || game.publisher;
                    game.designers = [req.body.designers] || game.designers;


                    game.save(function (err, savedGame) {
                        if (err) {
                            console.log("Error reading games");
                            res.status(500).json(err);
                        } else {
                            console.log("Game Updated");
                            res.status(200).json(savedGame);
                        }
                    })
                } else {
                    console.log("Game is null");
                    res.status(404).json({ message: "Game with given Id not found" });
                }
            }
        })
    }
    else {
        console.log("Invalid game id");
        res.status(404).json({ message: "Invalid game id" });
    }

}