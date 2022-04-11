const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games.controllers");
const publisherController = require("../controllers/publisher.controller");
router.route("/games")
    .get(gamesController.getAll) //.get((req,res)=>gamesController.getAll(req,res));
    .post(gamesController.addOne)
// .post(function(req,res){
//     res.status(200).json("{'Json Data': 'POST'}");
// });


router.route("/games/:gameId")
    .get(gamesController.getOne)
    .put(gamesController.replaceOne)
    .patch(gamesController.partialUpdate)
    .delete(gamesController.deleteOneGame);

router.route("/games/:gameId/publisher")
    .get(publisherController.getOne);

module.exports = router;