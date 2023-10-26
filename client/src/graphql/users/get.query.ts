import { gql } from '@apollo/client'

export const GET_USER = gql`
  mutation GetUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
    }
  }
`
