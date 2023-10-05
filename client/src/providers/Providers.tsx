import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers = ({children}: ProvidersProps) =>{

  return (
    <NextUIProvider>
      <Router>
        {children}
      </Router>
    </NextUIProvider>
  )
}