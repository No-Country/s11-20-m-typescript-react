import { gql } from '@apollo/client'

const GET_EVENTS = gql`
  query {
    events(
    filterEventInput: {
      title:""
      offset: 0
      limit: 0
    }
  ) {
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
