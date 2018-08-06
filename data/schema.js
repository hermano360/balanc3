const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type Query {
      getTransactions(address: String) : [Transaction] @cacheControl(maxAge: 180),
      getBalance(address: String) : String @cacheControl(maxAge: 180)
    }
    type Transaction {
      blockNo: String,
      timeStamp: String,
      hash: String,
      value: String,
      to: String,
      from: String
    }
`


module.exports = typeDefs;
