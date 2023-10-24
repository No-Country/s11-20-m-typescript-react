import { BrowserRouter as Router } from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'
import { ApolloProvider } from '@apollo/client'
import { ProvidersProps } from '../interfaces'
import { client } from '../utils'

export const Providers = ({children}: ProvidersProps) =>{

  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Router>
          {children}
        </Router>
      </NextUIProvider>
    </ApolloProvider>
  )
}