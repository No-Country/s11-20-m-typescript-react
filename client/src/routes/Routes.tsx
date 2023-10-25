import { Route, Routes } from 'react-router-dom'
import { FormLogin, FormRegister, Login } from '../pages'

export const AppRouter = () => (
  <Routes>
    <Route
      path='/login'
      element={
        <Login>
          <FormLogin />
        </Login>
        }
    />
    <Route
      path='/Register'
      element={
        <Login>
          <FormRegister />
        </Login>
        }
    />
  </Routes>
)
