require('dotenv').config()

const { ApolloServer, gql } = require('apollo-server')
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')


const dev = process.env.NODE_ENV !== 'production'
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
//Origin vieta likt domeni kas bus 
const server = new ApolloServer({ 
  playground: !!dev,
  typeDefs, resolvers, 
  cors: {
    origin: "*",
    credentials: true,
  } 
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
