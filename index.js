const express = require('express');
const { ApolloEngine } = require("apollo-engine");
const { ApolloServer, gql } = require('apollo-server-express');
const bodyParser = require( 'body-parser');
const resolvers = require('./data/resolvers')
const compression = require('compression');
// const { ApolloEngine } = require('apollo-engine');
const cors = require('cors')
const next = require('next')


const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare()
  .then(() => {
    const app = express()

    app.use(
      compression(),
      cors(),
      bodyParser.json()
    )

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    const typeDefs = gql`
        type Query {
          getTransactions(address: String, incoming: Boolean, outgoing: Boolean) : [Transaction] @cacheControl(maxAge: 5),
          getBalance(address: String) : String @cacheControl(maxAge: 5)
        }
        type Transaction {
          blockNo: String,
          timeStamp: String,
          hash: String,
          value: String,
          to: String,
          from: String
        }
        type Balance {
          balance: String
        }
    `

    const server = new ApolloServer({
      typeDefs,
      resolvers,
      tracing: true,
      cacheControl: true,
      engine: false
    });

    server.applyMiddleware({ app, path: '/graphql' });

    app.get('/react', (req, res) => {
      return nextApp.render(req, res, '/react', req.query);
    });
    app.get('/', (req, res) => {
      return nextApp.render(req, res, '/', req.query);
    });
    app.get('*', (req, res) => {
      return handle(req, res)
    })


    const PORT = process.env.PORT || 4000;


    const engine = new ApolloEngine({
      apiKey: "service:consensys:eOYeL-KnTN0hobw1tueG7Q"
    });

    engine.listen({
      port: PORT,
      expressApp: app
    });
  })
