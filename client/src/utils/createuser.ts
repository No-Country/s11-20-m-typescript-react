import { gql } from '@apollo/client'


// export const CREATE_USER = gql`
// mutation CreateUser(
//   $firstName: String!
//   $lastName: String!
//   $username: String!
//   $password: String!
//   $birthday: Datetime!
//   $email: String!
// ) {
//   createUser(createUserInput: {
//     firstName: $firstName
//     lastName: $lastName
//     username: $username
//     password: $password
//     birthday: $birthday
//     email: $email
//   }) 
//   {
//     _id
//     email
//   }
// }`

export const CREATE_USER = gql`
  mutation CreateUser
  ($createUserInput: CreateUserInput!) 
  {
    createUser
    (createUserInput: $createUserInput) 
    {
      _id
      email
    }
  }
`