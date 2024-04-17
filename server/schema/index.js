const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID!
        username: String
        email: String!,
        password: String!,
        role: String!,
        token: String
    }

    type Todo {
        id: ID!
        title: String!
        completed: Boolean
        userid: [User]
    }

    type AuthPayload {
        token: String!
        user: User!
    }     

    type Query {
        allUsers: [User!]!
        allTodos: [Todo!]!
    }

    type Mutation {
        register(email: String!, password: String!): User!
        login(email: String!, password: String!): AuthPayload!

        createTodo(title: String!, completed: Boolean!): Todo!
    }
`;

module.exports = typeDefs 

