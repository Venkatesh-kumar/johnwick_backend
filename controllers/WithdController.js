
const Withd = require('../models/Withd');
const { ObjectId } = require('mongodb');

//Return complete list of Users
const index = (req,res,next)=>{
    Withd.find()
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({message:'An error occured'})
    })
}

//Return a open withdrawl requests
const getOpenWithds = (req,res,next)=>{
    Withd.find({'status':'Open'})
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({status: 'failure'})
    })
}

//Add a User to database
const addWithd = (req,res,next) => {
    let withd = new Withd({
        withdID:ObjectId(),
        userID:req.body.userID,
        upi: req.body.upi,
        upiApp:req.body.upiApp,
        amount:req.body.amount,
        status:'Open'
    })
    withd.save()
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.json({status: 'failure'})
    })
}


//Update a User info
const updateWithd = (req,res,next) => {
    let withdID = req.body.withdID
    let updatedData = {
        status:'Close'
    }

    Withd.updateOne({"withdID":withdID},{$set: updatedData})
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.json({status: 'failure'})
    })
}

module.exports = {
    index, getOpenWithds, addWithd, updateWithd
}