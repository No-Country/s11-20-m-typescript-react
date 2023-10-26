import { gql } from '@apollo/client'

const GET_COUPONS = gql`
  query {
    coupons {
      _id
      title
      thumbnail
      status
      requeriedRank
      usesPerMonth
    }
  }
`

export default GET_COUPONS
