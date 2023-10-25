import React, { createContext, useContext } from 'react'

interface User {
  username: string
  email: string
  password: string
}

interface Props {
  children: React.ReactNode | JSX.Element
}

interface AuthContextType {
  user?: User
  loading: boolean
  login: (password: string, email: string) => void
  signup: (email: string, userName: string, password: string) => void
  logout: () => void
  isAuth: boolean
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthContextProvider = ({ children }: Props) => {
  const valor = 12

  const value = {
    valor
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
