import { ApolloClient, InMemoryCache } from '@apollo/client'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const client = new ApolloClient({
  uri: API_URL + '/graphql',
  cache: new InMemoryCache()
})

const httpClient = axios.create({
  baseURL: API_URL + '/api',
  headers: {
    'Content-type': 'application/json'
  }
})

export { httpClient }
