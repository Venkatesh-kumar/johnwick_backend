const { ObjectId } = require('mongodb');
const Bet = require('../models/Bet');

//Return complete list of Users
const index = (req,res,next)=>{
    Bet.find()
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({message:'An error occured'})
    })
}

//Return a single User
const getBet = (req,res,next)=>{
    let betID = req.body.betID
    Bet.find({"betID":betID})
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({status: 'failure'})
    })
}

//Return all match bets
const getMatchBets = (req,res,next)=>{
    let matchID = req.body.matchID
    Bet.find({"matchID":matchID})
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({status: 'failure'})
    })
}


//Add a User to database
const addBet = (req,res,next) => {
    let bet = new Bet({
        betID: ObjectId(),
        p1:req.body.p1,
        p2:req.body.p2,
        bvt1: req.body.bvt1,
        bvt2:req.body.bvt2,
        ba:req.body.ba,
        bt:req.body.bt,
        bs:req.body.bs,
        matchID:req.body.matchID
    })
    bet.save()
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.json({status: 'failure'})
    })
}

//Update a User info
const updateBet = (req,res,next) => {
    let betID = req.body.betID
    let updatedData = {
        p1:req.body.p1,
        p2:req.body.p2,
        bvt1: req.body.bvt1,
        bvt2:req.body.bvt2,
        ba:req.body.ba,
        bt:req.body.bt,
        bs:req.body.bs,
        matchID:req.body.matchID
    }

    Bet.updateOne({"betID":betID},{$set: updatedData})
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.json({status: 'failure'})
    })
}

//Delete a User
const deleteBet = (req,res,next)=>{
    let betID = req.body.betID
    Bet.deleteOne( {"betID":betID})
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        res.json({status: 'failure'})
    })
}

module.exports = {
    index, getBet, addBet, deleteBet, updateBet, getMatchBets
}