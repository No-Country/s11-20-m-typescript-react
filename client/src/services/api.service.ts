import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

// export const client = new ApolloClient({
//   uri: 'https://earthpoints.onrender.com/graphql',
//   cache: new InMemoryCache()
// })
