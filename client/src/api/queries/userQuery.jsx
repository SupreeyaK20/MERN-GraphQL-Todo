import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query allUsers {
    allUsers {
      id
      email
      username
    }
  }
`
export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      email
      username
    }
  }
`
