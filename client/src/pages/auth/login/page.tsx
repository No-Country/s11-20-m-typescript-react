import { Button } from '@nextui-org/react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import './Login.css'
import { UtilRoutes } from '@/utils/routes.utils'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '@/components'
import { emailPattern, passwordPattern } from '@/utils/pattern.utils'

export const Login = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<any>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      console.log('login user', data)
    } catch (error) {
      console.error('Error signin catch:', error)
    }
  }

  return (
    <form
      className='flex flex-col w-[351px] flex-wrap md:flex-nowrap gap-4 font-inter'
      autoComplete='off'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type='email'
        name='email'
        label='Email'
        placeholder='Ingrese un nombre de Usuario'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: emailPattern.value,
              message: emailPattern.message
            },
            required: { value: true, message: 'This field is required' }
          }
        }}
        errorMessage={errors?.email?.message?.toString()}
      />
      <Input
        label='Contraseña'
        name='password'
        placeholder='Ingrese una contraseña'
        type='password'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: passwordPattern.value,
              message: passwordPattern.message
            },
            required: { value: true, message: 'This field is required' }
          }
        }}
        errorMessage={errors?.password?.message?.toString()}
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
          type='submit'
          isLoading={isSubmitting}
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
    </form>
  )
}

export default Login
