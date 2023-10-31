import { gql } from '@apollo/client'

const GET_EVENT = gql`
  query event($eventId: String!) {
    event(id: $eventId) {
      title
      description
      startDate
      endDate
      deadline
      spots
      time
      thumbnail
      type
      members {
        user {
          _id
        }
        status
      }
      owner {
        _id
      }
    }
  }
`

export default GET_EVENT
