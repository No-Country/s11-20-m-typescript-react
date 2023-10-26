import { PanelLayout } from '@/pages'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Input, Button } from '@/components'
import {
  emailPattern,
  firstNamePattern,
  lastNamePattern,
  passwordPattern
} from '@/utils/pattern.utils'
import { validateAdult } from '@/utils/validateAdult.util'
import { UPDATE_USER } from '@/graphql/users/update.mutation'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router'
import { UtilRoutes } from '@/utils/routes.utils'
import { useAuth } from '@/context/providers/auth.provider'

interface FormData {
  firstName: string
  lastName: string
  email: string
  birthday: string
  password: string
  username: string
}

const Configuration = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [updateUserMutation] = useMutation(UPDATE_USER)
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<FormData>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // const formData = {
    //   ...data,
    //   birthdate: new Date(data.birthdate).toISOString()
    // }

    try {
      await updateUserMutation({
        variables: {
          updateUserInput: {
            _id: user?.id,
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            password: data.password,
            birthday: new Date(data.birthday).toISOString(),
            email: data.email
          }
        }
      })
      navigate(UtilRoutes.PANEL)
    } catch (error) {
      console.error('Error during account update:', error)
    }
  }

  return (
    <PanelLayout title='Configuración'>
      <form
        className='flex flex-col w-full flex-wrap md:flex-nowrap items-end gap-6 font-inter'
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='grid grid-cols-2 gap-5 w-full'>
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
        </div>
        <Button
          type='submit'
          isLoading={isSubmitting}
          title='Guardar'
        />
      </form>
    </PanelLayout>
  )
}

export default Configuration
