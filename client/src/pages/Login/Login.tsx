import { Button } from '@nextui-org/react'
import logocompleto from './components/icons/LogoCompleto.png'
import login from './components/icons/login.png'
import register from './components/icons/register.png'
import { Link } from 'react-router-dom'
import './login.css'

interface LoginProps {
  children: React.ReactNode | JSX.Element
}

export const Login = ({ children }: LoginProps) => (
  <>
    <div className='flex justify-center items-center min-h-screen bg-image-container relative'>
      <div className='flex flex-col'>
        <Button
          className='w-[70px] h-[138px] bg-white rounded-tl-xl hover:bg-blue-200'
          radius='none'
        >
          <Link
            to='/login'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={login} alt='Starting menu link (login)' />
            <span className='font-semibold'>Start</span>
          </Link>
        </Button>

        <Button
          className='w-[70px] h-[138px] bg-white rounded-bl-xl hover:bg-blue-200'
          radius='none'
        >
          <Link
            to='/register'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={register} alt='Starting menu link (register)' />
            <span className='font-semibold'>Register</span>
          </Link>
        </Button>
      </div>

      <div className='flex flex-row justify-center w-[830px] h-[630px] bg-white rounded-[24px] relative'>
        <div className='flex flex-col justify-center items-center w-1/2'>
          <img
            src='https://placehold.co/367x585'
            alt='image'
            style={{ borderRadius: '16px' }}
          />
        </div>

        <div className='flex flex-col justify-center items-center w-1/2'>
          <img src={logocompleto} alt='Logo' className='my-auto' />
          {children}
        </div>
      </div>
    </div>
  </>
)
