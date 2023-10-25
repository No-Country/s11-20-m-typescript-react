import { useState } from 'react'
import { Input, Button } from '@nextui-org/react'
import { EyeFilledIcon } from '../_icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../_icons/EyeSlashFilledIcon'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import './Login.css'
import { UtilRoutes } from '@/utils/routes.utils'

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => { setIsVisible(!isVisible) }

  return (
    <form
      className='flex flex-col w-[351px] flex-wrap md:flex-nowrap gap-4 font-inter'
      autoComplete='off'
    >
      <Input
        id='input'
        isRequired
        classNames={{
          label: 'text-teal-800 font-semibold'
        }}
        size='sm'
        type='email'
        name='email'
        label='Email'
        placeholder='Ingrese un nombre de Usuario'
      />
      <Input
        autoComplete='false'
        isRequired
        classNames={{
          label: 'text-teal-800 font-semibold'
        }}
        size='sm'
        label='Contraseña'
        name='password'
        placeholder='Ingrese una contraseña'
        endContent={
          <button
            className='focus:outline-none'
            type='button'
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
            ) : (
              <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
            )}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
      />

      <Link
        to={UtilRoutes.HOME}
        color='foreground'
        className='flex flex-row-reverse text-teal-800 hover:underline'
        style={{ userSelect: 'none' }}
      >
        ¿Olvidaste tu contraseña?
      </Link>

      <Button
        type='submit'
        className='bg-yellow-400 font-bold text-black-950 hover:bg-teal-800 hover:text-yellow-400'
      >
        Login
      </Button>

      <h1 id='h2' className='flex flex-row justify-center'>
        <span>O inicia sesión con Google</span>
      </h1>

      <div className='flex flex-col justify-center items-center mt-3'>
        <Button
          style={{ width: '64px', height: '64px', border: 'solid #B8B8B8 1px' }}
          className='flex flex-row justify-center bg-white hover:bg-blue-200'
        >
          <FcGoogle style={{ fontSize: '4rem' }} />
        </Button>
      </div>

      <Link
        to={UtilRoutes.REGISTER}
        color='foreground'
        className='flex flex-row justify-center mt-7 mb-1 gap-2'
        style={{ userSelect: 'none' }}
      >
        No tienes cuenta?{'\u00A0'}
        <span className='text-teal-800 font-bold'>Registrate</span>
      </Link>

      {/* <p className='flex flex-row justify-center mt-10 mb-2 gap-2' style={{userSelect: "none"}}>Don't have an account?{'\u00A0'}
        <span className='text-teal-800 font-bold'>Sign-up</span>
      </p> */}
    </form>
  )
}

export default Login
