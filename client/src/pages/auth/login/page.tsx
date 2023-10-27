import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { UtilRoutes } from '@/utils/routes.utils'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Button, Input } from '@/components'
import { emailPattern, passwordPattern } from '@/utils/pattern.utils'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '@/graphql/users/login.mutation'
import { useAuth } from '@/context/providers/auth.provider'

interface FormData {
  email: string
  password: string
}

export const Login = () => {
  const navigate = useNavigate()
  const [loginMutation] = useMutation(LOGIN_USER)
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const { email, password } = data
      const response = await loginMutation({ variables: { email, password } })
      login(response.data.login.token, response.data.login.userId)
      navigate(UtilRoutes.PANEL)
    } catch (error) {
      console.error('Error signin catch:', error)
    }
  }

  return (
    <form
      className='flex flex-col gap-4 font-inter w-full h-full'
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
      <div className='flex flex-col gap-4'>
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
          title='Iniciar sesión'
        />
        <h1 id='h2' className='flex flex-row justify-center'>
          <span>O inicia sesión con Google</span>
        </h1>
        <div className='flex flex-col justify-center items-center mt-3'>
          <Button
            type='submit'
            isLoading={isSubmitting}
            className='flex flex-row justify-center bg-white hover:bg-blue-200'
          >
            <FcGoogle style={{ fontSize: '4rem' }} />
          </Button>
        </div>
        <Link
          to={UtilRoutes.REGISTER}
          color='foreground'
          className='flex flex-row justify-center pt-7 mb-1 gap-2'
        >
          No tienes cuenta?{'\u00A0'}
          <span className='text-teal-800 font-bold'>Registrate</span>
        </Link>
      </div>
    </form>
  )
}

export default Login
