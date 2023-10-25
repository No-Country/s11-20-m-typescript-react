import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { UtilRoutes } from '@/utils/routes.utils'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '@/components'
import {
  emailPattern,
  firstNamePattern,
  lastNamePattern,
  passwordPattern
} from '@/utils/pattern.utils'
import { validateAdult } from '@/utils/validateAdult.util'

export const Register = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<any>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<any> = async (data) => {
    const formData = {
      ...data,
      birthdate: new Date(data.birthdate).toISOString()
    }

    try {
      console.log('register user', formData)
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
        name='lastname'
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
        errorMessage={errors?.lastname?.message?.toString()}
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

      {/* <Input id='input' onChange={handleChange} value={formData.username} isRequired classNames={{label: 'text-teal-800 font-semibold',}} size='sm' type="text" name="username" label="Usuario" placeholder="Ingrese un nombre de usuario" /> */}

      <Input
        type='date'
        name='birthdate'
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

      <Button
        type='submit'
        className='bg-yellow-400 font-bold text-black-950 hover:bg-teal-800 hover:text-yellow-400'
        isLoading={isSubmitting}
      >
        Register
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
    </form>
  )
}

export default Register
