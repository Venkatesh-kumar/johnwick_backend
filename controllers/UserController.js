const { ObjectId } = require('mongodb');
const User = require('../models/User');

//Return complete list of Users
const index = (req,res,next)=>{
    User.find()
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({message:'An error occured'})
    })
}

//Return a single User
const getUser = (req,res,next)=>{
    let email = req.body.email
    User.find({'email':email})
    .then(response => {
        res.json({response})
    })
    .catch(err => {
        res.json({status: 'failure'})
    })
}

//Add a User to database
const addUser = (req,res,next) => {
    let user = new User({
        email: req.body.email,
        password: req.body.password,
        wallet:req.body.wallet
    })
    user.save()
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.json({status: 'failure'})
    })
}

//Update a User info
const updateWallet = (req,res,next) => {
    let email = req.body.email
    let updatedData = {
        wallet:req.body.wallet
    }

    User.updateOne({"email":email},{$set: updatedData})
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.json({status: 'failure'})
    })
}

//Update a User info
const updatePassword = (req,res,next) => {
    let email = req.body.email
    let updatedData = {
        password:req.body.password
    }

    User.updateOne({"email":email},{$set: updatedData})
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        console.log(err)
        res.json({status: 'failure'})
    })
}

//Delete a User
const deleteUser = (req,res,next)=>{
    let email = req.body.email
    User.deleteOne( {"email": email})
    .then(response => {
        res.json({status: 'success'})
    })
    .catch(err => {
        res.json({status: 'failure'})
    })
}

module.exports = {
    index, getUser, addUser, deleteUser, updateWallet, updatePassword
}