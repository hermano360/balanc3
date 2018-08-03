const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const bodyParser = require( 'body-parser');
const resolvers = require('./data/resolvers')
const compression = require('compression');
// const { ApolloEngine } = require('apollo-engine');
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(compression());

const typeDefs = gql`
    type Query {
      getTransactions(address: String) : [User],
      getBalance(address: String) : String
    }
    type User {
      name: String,
      age: Int
      id: String
    }
    type Balance {
      balance: String
    }
`

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });


const PORT = process.env.PORT || 4000;
app.listen(PORT, (args) => {
  console.log(`Listening on port`, PORT);
});
