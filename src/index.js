const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

// This implements the schema
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: (root, args, context, info) => context.prisma.links()
    },
    Mutation: {
        post: (root, args, context) => context.prisma.createLink({
            url: args.url,
            description: args.description
        })
    }
}

// A bundle passed to server to tell it what API operations are accepted and how to resolve them
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma }
})

server.start(() => console.log(`Server is running on http://localhost:4000`))