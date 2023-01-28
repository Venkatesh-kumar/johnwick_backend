const { ObjectId } = require('mongodb');
const Match = require('../models/Match');

//Return complete list of Users
const index = (req,res,next)=>{
    Match.find()
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({message:'An error occured'})
    })
}

//Return a single User
const getMatch = (req,res,next)=>{
    let matchID = req.body.matchID
    Match.find({"matchID":matchID})
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({status: 'failure'})
    })
}

//Add a User to database
const addMatch = (req,res,next) => {
    let match = new Match({
        matchID: ObjectId(),
        team1: req.body.team1,
        team2:req.body.team2
    })
    match.save()
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.json({status: 'failure'})
    })
}

//Update a User info
const updateMatch = (req,res,next) => {
    let matchID = req.body.matchID
    let updatedData = {
        team1: req.body.team1,
        team2:req.body.team2
    }

    Match.updateOne({"matchID":matchID},{$set: updatedData})
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.json({status: 'failure'})
    })
}

//Delete a User
const deleteMatch = (req,res,next)=>{
    let matchID = req.body.matchID
    Match.deleteOne( {"matchID":matchID})
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        res.json({status: 'failure'})
    })
}

module.exports = {
    index, getMatch, addMatch, deleteMatch, updateMatch
}