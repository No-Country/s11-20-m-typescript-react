import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers{
    users{
      username
      firstName
      lastName
      profileImage
    }
  }
`