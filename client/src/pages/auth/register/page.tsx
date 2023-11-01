import { Button } from '@nextui-org/react'
import { Link, useNavigate } from 'react-router-dom'
import { UtilRoutes } from '@/utils/routes.utils'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '@/components'
import {
  emailPattern,
  firstNamePattern,
  lastNamePattern,
  passwordPattern,
  usernamePattern
} from '@/utils/pattern.utils'
import { validateAdult } from '@/utils/validateAdult.util'
import { useMutation } from '@apollo/client'
import { CREATE_USER } from '@/graphql/users/create.mutation'

interface FormData {
  firstName: string
  lastName: string
  email: string
  birthday: string
  password: string
  username: string
}

export const Register = () => {
  const navigate = useNavigate()
  const [CreateUserMutation] = useMutation(CREATE_USER)
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<FormData>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await CreateUserMutation({
        variables: {
          createUserInput: {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            password: data.password,
            birthday: data.birthday,
            email: data.email
          }
        }
      })
      navigate(UtilRoutes.LOGIN)
    } catch (error) {
      console.error('Error signin catch:', error)
    }
  }

  return (
    <form
      className='flex flex-col w-full flex-wrap md:flex-nowrap gap-4 font-inter'
      autoComplete='off'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type='text'
        name='firstName'
        label='Nombre'
        placeholder='Ingrese su nombre'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: firstNamePattern.value,
              message: firstNamePattern.message
            },
            required: { value: true, message: 'This field is required' }
          }
        }}
        errorMessage={errors?.firstName?.message?.toString()}
      />
      <Input
        type='text'
        name='lastName'
        label='Apellido'
        placeholder='Ingrese su apellido'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: lastNamePattern.value,
              message: lastNamePattern.message
            },
            required: { value: true, message: 'This field is required' }
          }
        }}
        errorMessage={errors?.lastName?.message?.toString()}
      />
      <Input
        type='email'
        name='email'
        label='Email'
        placeholder='Ingrese su Email'
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
        type='text'
        name='username'
        label='Usuario'
        placeholder='Ingrese un nombre de usuario'
        hookForm={{
          register,
          validations: {
            pattern: {
              value: usernamePattern.value,
              message: usernamePattern.message
            },
            required: { value: true, message: 'This field is required' }
          }
        }}
        errorMessage={errors?.username?.message?.toString()}
      />
      <Input
        type='date'
        name='birthday'
        label='Fecha de nacimiento'
        placeholder='Ingrese su fecha de nacimiento'
        hookForm={{
          register,
          validations: {
            validate: (value: string) => {
              const adult = validateAdult(new Date(value))
              if (!adult) return 'You must be an adult'
              return true
            },
            required: { value: true, message: 'This field is required' }
          }
        }}
        errorMessage={errors?.birthday?.message?.toString()}
      />
      <Input
        label='Contraseña'
        name='password'
        placeholder='Contraseña'
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
        <Button
          type='submit'
          className='bg-yellow-400 font-bold text-black-950 hover:bg-teal-800 hover:text-yellow-400'
          isLoading={isSubmitting}
        >
          Registrarse
        </Button>
        <Link
          to={UtilRoutes.LOGIN}
          color='foreground'
          className='flex flex-row justify-center mt-7 mb-1 gap-2'
          style={{ userSelect: 'none' }}
        >
          Ya tienes cuenta?{'\u00A0'}
          <span className='text-teal-800 font-bold'>Iniciar sesión</span>
        </Link>
      </div>
    </form>
  )
}

export default Register
