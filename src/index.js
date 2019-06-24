const { GraphQLServer } = require('graphql-yoga')

// This defines schema
const typeDefs = `
type Query {
    info: String!
}
`

// This implements the schema
const resolvers = {
    Query: {
        info: () => null //`This is the API of a Hackernews Clone`
    }
}

// A bundle passed to server to tell it what API operations are accepted and how to resolve them
const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log(`Server is running on http://localhost:4000`))