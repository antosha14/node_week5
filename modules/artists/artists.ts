import { gql } from "apollo-server"

const artist = gql`type Artist {
  id: ID!
  age: Int
  name: String
}

type Query {
     artist: [Artist!]!
}`

export default artist