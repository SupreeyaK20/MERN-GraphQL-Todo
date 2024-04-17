const express = require('express')
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const connectDB = require('./config/db')
require('dotenv').config();
const verifyToken = require('./middleware/verifyToken')

const PORT = process.env.PORT;

async function startServer() {

  await connectDB();
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    context: async ({ req }) => {
      return await verifyToken(req);
    }
  });

  const app = express();

  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at port ${PORT}`);
  });
}

startServer();
