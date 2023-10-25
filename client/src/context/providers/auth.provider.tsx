import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode
} from 'react'
import { useNavigate } from 'react-router-dom'
import { useJwt } from 'react-jwt'

interface AuthProviderProps {
  children: ReactNode
}
interface User {
  id: string
  token: string
}

interface AuthContextType {
  user: User | null
  login: (token: string, userId: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const { isExpired } = useJwt(user?.token ?? '')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    if (token && userId) {
      setUser({ id: userId, token })
      if (!isExpired) {
        navigate('/dashboard')
      }
      navigate('/login')
    }
  }, [])

  const login = (token: string, userId: string) => {
    setUser({ id: userId, token })
    localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
