const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID!
        username: String
        email: String!,
        password: String!,
        role: String!,
        token: String,
        todos: [Todo!]!
    }

    type Todo {
        id: ID!
        title: String!
        description: String
        isCompleted: Boolean
        userid: ID!
        user: User
    }

    type AuthPayload {
        token: String!
        user: User!
    }     

    type Query {
        getTodos: [Todo!]!
        allUsers: [User!]!
        getUsersTodo: [Todo!]!
    }

    type Mutation {
        register(email: String!, password: String!): User!
        login(email: String!, password: String!): AuthPayload!

        createTodo(title: String!, description: String, isCompleted: Boolean!): Todo!
    }
`;

module.exports = typeDefs 

