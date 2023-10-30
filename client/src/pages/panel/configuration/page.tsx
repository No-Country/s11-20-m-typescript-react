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
import { useMutation, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router'
import { UtilRoutes } from '@/utils/routes.utils'
import { useAuth } from '@/context/providers/auth.provider'
import { FIND_USER } from '@/graphql/users/getUserById.query'
import { toast } from 'sonner'

interface FormData {
  firstName: string
  lastName: string
  email: string
  birthday: string
  oldPassword: string
  username: string
  newPassword: string
  repeatPassword: string
}

const Configuration = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { data: dataUsers1 } = useQuery(FIND_USER, {
    variables: {
      id: user?.id
    }
  })
  const [updateUserMutation, { error, data: datagp }] = useMutation(UPDATE_USER)

  const initialValues = {
    firstName: dataUsers1?.user?.firstName || '',
    lastName: dataUsers1?.user?.lastName || '',
    email: dataUsers1?.user?.email || '',
    birthday: dataUsers1?.user?.birthday.split('T')[0] || '',
    oldPassword: dataUsers1?.user?.oldPassword || '',
    newPassword: dataUsers1?.user?.newPassword || ''
  }

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    getValues
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: initialValues
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await updateUserMutation({
        variables: {
          updateUserInput: {
            _id: user?.id,
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
            birthday: data.birthday,
            email: data.email
          }
        }
      })
      console.log(res, error, datagp)
      toast.success('Succesfully')
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
            defaultValue={initialValues.firstName}
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
            defaultValue={initialValues.lastName}
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
            defaultValue={initialValues.email}
            errorMessage={errors?.email?.message?.toString()}
          />
          {/* <Input id='input' onChange={handleChange} value={formData.username} isRequired classNames={{label: 'text-teal-800 font-semibold',}} size='sm' type="text" name="username" label="Usuario" placeholder="Ingrese un nombre de usuario" /> */}
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
            defaultValue={
              initialValues.birthday ? initialValues.birthday.split('T')[0] : ''
            }
            errorMessage={errors?.birthday?.message?.toString()}
          />
          <div className='flex grid-cols-2 flex-col gap-4 w-full lg:grid'>
            <Input
              type='text'
              name='oldPassword'
              label='Contraseña actual'
              placeholder='Contraseña actual'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: passwordPattern.value,
                    message: passwordPattern.message
                  },
                  required: {
                    value: getValues()?.oldPassword?.length > 0,
                    message: 'This field is required'
                  }
                }
              }}
              errorMessage={errors?.oldPassword?.message?.toString()}
            />
            <Input
              type='text'
              name='newPassword'
              label='Contraseña nueva'
              placeholder='Contraseña nueva'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: passwordPattern.value,
                    message: passwordPattern.message
                  },
                  required: {
                    value: getValues()?.newPassword?.length > 0,
                    message: 'This field is required'
                  }
                }
              }}
              errorMessage={errors?.oldPassword?.message?.toString()}
            />
            <Input
              type='text'
              name='repeatPassword'
              label='Repetir Contraseña'
              placeholder='Repetir Contraseña'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: passwordPattern.value,
                    message: passwordPattern.message
                  },
                  required: {
                    value: getValues()?.repeatPassword?.length > 0,
                    message: 'This field is required'
                  },
                  validate: (value) => {
                    const newPassword = getValues('newPassword')
                    return (
                      newPassword === value || 'Las contraseñas no coinciden'
                    )
                  }
                }
              }}
              errorMessage={errors?.repeatPassword?.message?.toString()}
            />
          </div>
        </div>
        <Button type='submit' isLoading={isSubmitting} title='Guardar' />
      </form>
    </PanelLayout>
  )
}

export default Configuration
