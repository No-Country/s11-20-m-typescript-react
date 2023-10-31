import { gql } from '@apollo/client'

export const FIND_USER = gql`
  query FindUser($id: String!) {
    user(id: $id) {
      _id
      firstName
      lastName
      email
      birthday
    }
  }
`
