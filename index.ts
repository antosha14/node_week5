import { ApolloServer, gql } from "apollo-server"

// формально резолвер это контроллер, а функции в резолвере это сервис? как модель в ресте???? По крайней мере 
const server = new ApolloServer({ typeDefs, resolver:})

server.listen().then((url) => {
    console.log(`Server is running on ${url}`)
})