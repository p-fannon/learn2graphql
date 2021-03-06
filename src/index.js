const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')

// This implements the schema
const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link,
    Vote
}

// A bundle passed to server to tell it what API operations are accepted and how to resolve them
const server = new GraphQLServer({
    typeDefs: 'schema.graphql',
    resolvers,
    context: request => {
        return { 
            ...request,
            prisma 
        }
    }
})

server.start(() => console.log(`Server is running on http://localhost:4000`))