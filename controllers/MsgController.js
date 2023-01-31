
const Msg = require('../models/Msg');

//Return complete list of Users
const index = (req,res,next)=>{
    Msg.find()
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({message:'An error occured'})
    })
}

//Return a single User
const getUserMsgs = (req,res,next)=>{
    let email = req.body.email
    Msg.find({'email':email})
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({status: 'failure'})
    })
}

//Add a User to database
const addMsg = (req,res,next) => {
    let msg = new Msg({
        email:req.body.email,
        message: req.body.message,
        type:req.body.type,
        amount:req.body.amount,
        date:new Date().toLocaleDateString()
    })
    msg.save()
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.json({status: 'failure'})
    })
}



//Delete a User
const deleteMsgs = (req,res,next)=>{
    let email = req.body.email
    Msg.delete( {"email": email})
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        res.json({status: 'failure'})
    })
}

module.exports = {
    index, getUserMsgs, addMsg, deleteMsgs
}