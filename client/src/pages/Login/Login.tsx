import { Button } from '@nextui-org/react'
import logocompleto from '../../assets/LogoCompleto.png'
import {Link} from '@nextui-org/react'
import { Link as RouterLink } from 'react-router-dom'
import './login.css'

interface LoginProps {
  children: React.ReactNode | JSX.Element;
}

export const Login = ({ children }: LoginProps) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-image-container relative">

        <div className='flex flex-col'>
          <RouterLink to='/login'>
            <Button className='w-[70px] h-[138px] bg-white rounded-tl-xl' radius='none'>Login</Button>
          </RouterLink>
          <Link href='/register'>
            <Button className='w-[70px] h-[138px] bg-white rounded-bl-xl' radius='none'>Registro</Button>
          </Link>
        </div>

        <div className="flex flex-row justify-center w-[830px] h-[630px] bg-white rounded-[24px] relative">
          <div className="flex flex-col justify-center items-center w-1/2">
            <img src={'https://placehold.co/367x585'} alt="image" style={{ borderRadius: '16px' }} />
          </div>

          <div className="flex flex-col justify-center items-center w-1/2">
            <img src={logocompleto} alt="Logo" className="my-auto" />
            {children}
          </div>





        </div>
      </div>
    </>
  )
}
