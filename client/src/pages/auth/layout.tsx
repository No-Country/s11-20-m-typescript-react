import logo from '@/assets/logo.png'
import cerrar from '@/assets/botones/cerrar.png'
import { Link } from 'react-router-dom'
import './Auth.css'
import { UtilRoutes } from '@/utils/routes.utils'
import ButtonsGroup from './_components/ButtonsGroup'

interface LoginProps {
  children: React.ReactNode | JSX.Element
}

export const AuthLayout = ({ children }: LoginProps) => (
  <div className='flex justify-center h-[100vh] py-10  items-center bg-image-container relative'>
    <img
      src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1613&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      alt='Background image'
      className='absolute top-0 bottom-0 left-0 w-screen  object-cover  h-full'
    />
    <ButtonsGroup />
    <div className='gap-10 p-8 flex h-full flex-row justify-center w-[830px] bg-white rounded-[24px] relative'>
      <div className='flex flex-col justify-center h-auto items-start w-1/2'>
        <img
          draggable='false'
          src='https://images.unsplash.com/photo-1621496654772-c66c48290259?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='image'
          className='object-cover w-full h-full rounded-[16px]'
        />
      </div>
      <div className='flex flex-col justify-around h-auto  w-1/2'>
        <div className='flex flex-col justify-center items-end w-auto'>
          <Link to={UtilRoutes.HOME}>
            <img src={cerrar} alt='Close user menu' />
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center gap-5 h-full'>
          <img
            draggable='false'
            src={logo}
            alt='Logo'
            className='object-cover'
            width='30%'
          />
          <div className='flex h-auto w-full '>{children}</div>
        </div>
      </div>
    </div>
  </div>
)

export default AuthLayout
