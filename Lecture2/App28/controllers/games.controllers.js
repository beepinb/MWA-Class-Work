const gamesData=require("../data/games.json")

module.exports.getAll=function(req,res){
    console.log("GET All controller called.");
    let offset=0;
    let count=5;
    console.log(req.query.offset);
    console.log(req.query.count);
    if(req.query&&req.query.count){

        count=parseInt(req.query.count,10);
    }
    if(req.query&&req.query.offset){

        offset=parseInt(req.query.offset,10);
    }
    // console.log(req,res);
    console.log("offset",offset);
    console.log("offset + count",offset+count);
    const pageGames=gamesData.slice(offset,offset+count);
    res.status(200).json(pageGames);
}

module.exports.getOne=function(req,res){
    console.log("GET One called.");
    const getIndex=req.params.gameIndex;
    res.status(200).json(gamesData[getIndex]);
}
module.exports.addOne=function(req,res){
    console.log("Add One called.");
    console.log(req.body);
    // const getIndex=req.params.gameIndex;
    res.status(200).json(req.body);
}
