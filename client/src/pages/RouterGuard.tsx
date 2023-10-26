import { LOCAL_STORAGE } from '@/context/constants'
import { UtilRoutes } from '@/utils/routes.utils'
import { type ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface props {
  children: ReactNode
}

export const RouterGuard = ({ children }: props) => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE.TOKEN)
    if (!token) navigate(UtilRoutes.HOME)
  }, [])

  return <>{children}</>
}
