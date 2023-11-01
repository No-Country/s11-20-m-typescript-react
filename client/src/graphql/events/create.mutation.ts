import { gql } from '@apollo/client'

export const CREATE_EVENT = gql`
  mutation CreateEvent($createEventInput: CreateEventInput!) {
    createEvent(createEventInput: $createEventInput) {
      _id
      title
    }
  }
`
