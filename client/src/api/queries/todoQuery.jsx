import { gql } from "@apollo/client";

export const GET_USERS = gql`
    getTodos {
      title
      description
      isCompleted
      user {
        username
        email
      }
    }
`;

export const GET_USER = gql`
    getUsersTodo {
        title,
        description,
        isCompleted,
    
    }
`;
