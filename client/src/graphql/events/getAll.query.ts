import { gql } from '@apollo/client'

const GET_EVENTS = gql`
query {
  events(filterEventInput: { 
    title: "", 
    offset: 0, 
    limit: 0 
    }) {
    _id 
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
}`

export default GET_EVENTS
