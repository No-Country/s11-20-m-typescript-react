import { Button } from '@nextui-org/react'
import logo from '@/assets/logo.png'
import cerrar from '@/assets/botones/cerrar.png'
import login from '@/assets/botones/login.png'
import register from '@/assets/botones/register.png'
import { Link } from 'react-router-dom'
import './Auth.css'
import { UtilRoutes } from '@/utils/routes.utils'

interface LoginProps {
  children: React.ReactNode | JSX.Element
}

export const AuthLayout = ({ children }: LoginProps) => (
  <>
    <div className='flex justify-center items-center min-h-screen bg-image-container relative'>
      <div className='flex flex-col'>
        <Button
          className='w-[70px] h-[138px] bg-white rounded-tl-xl hover:bg-blue-200'
          radius='none'
        >
          <Link
            to={UtilRoutes.LOGIN}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={login} alt='Starting menu link (login)' />
            <span className='font-semibold'>Inicio</span>
          </Link>
        </Button>

        <Button
          className='w-[70px] h-[138px] bg-white rounded-bl-xl hover:bg-blue-200'
          radius='none'
        >
          <Link
            to={UtilRoutes.REGISTER}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={register} alt='Starting menu link (register)' />
            <span className='font-semibold'>Registro</span>
          </Link>
        </Button>
      </div>

      <div className='flex flex-row justify-center w-[830px] h-[630px] bg-white rounded-[24px] relative'>
        <div className='flex flex-col justify-center items-start w-1/2'>
          <img
            draggable='false'
            src='https://placehold.co/367x585'
            alt='image'
            style={{ borderRadius: '16px' }}
          />
        </div>

        <div className='flex flex-col justify-around h-auto w-max'>
          <div className='flex flex-col justify-center items-end w-auto'>
            <Link to={UtilRoutes.HOME}>
              <img src={cerrar} alt='Close user menu' />
            </Link>
          </div>

          <div className='flex flex-col items-center justify-center h-max'>
            <img
              draggable='false'
              src={logo}
              alt='Logo'
              className=''
              width='40%'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '50px',
                userSelect: 'none'
              }}
            />
            {children}
          </div>
        </div>
      </div>
    </div>
  </>
)

export default AuthLayout
