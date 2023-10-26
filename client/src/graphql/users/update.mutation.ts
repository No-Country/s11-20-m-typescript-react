import { gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation UpdateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      firstName
      lastName
      email
      userName
      password
      birthday
      email
    }
  }
`
