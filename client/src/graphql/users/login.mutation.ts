import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation GetUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      userId
    }
  }
`
