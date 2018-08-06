const mongoose =require('mongoose')

mongoose.connect('mongodb://consensys:balanc3@ds113732.mlab.com:13732/consensys',{ useNewUrlParser: true });
mongoose.Promise = global.Promise
const Schema = mongoose.Schema

const balanceFields = {
  balance: Number,
  address: String
}

const transactionFields = {
  transactions: [{
    from: String,
    to: String,
    value: String,
    hash: String,
    blockNo: String,
    timeStamp: String
  }],
  address: String
}

var Balance = mongoose.model('Balances', new Schema(balanceFields));
var Transactions = mongoose.model('Transactions', new Schema(transactionFields));


module.exports =  { Balance, Transactions }
