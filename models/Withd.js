const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WithdSchema = new Schema({
    withdID:{type:String,unique:true},
    userID:{type: String},
    upi:{type: String},
    upiApp:{type:String},
    amount:{type:String},
    status:{type:String}
})

const Withd = mongoose.model('Withd',WithdSchema)
module.exports = Withd;