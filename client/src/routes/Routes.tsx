
import { Route, Routes } from 'react-router-dom'
import { Login, Register } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
  )
}
