import { ApolloServer, gql } from "apollo-server"
import artist from "./modules/artists/artists"
import { artistResolver } from "./modules/artists/resolver"

// формально резолвер это контроллер, а функции в резолвере это сервис? как модель в ресте???? По крайней мере 
let typeDefs = artist
let resolvers = artistResolver
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server is running on ${url}`)
})