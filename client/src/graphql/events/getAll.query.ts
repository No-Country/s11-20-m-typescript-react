import { gql } from '@apollo/client'

const GET_EVENTS = gql`
  query {
    events {
      title
      description
      startDate
      endDate
      deadline
      spots
      time
      thumbnail
      type
      location {
        country
        state
      }
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

export default GET_EVENTS
