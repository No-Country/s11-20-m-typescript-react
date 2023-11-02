import { PanelLayout } from '@/pages'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Input, Button } from '@/components'
import {
  adressPattern,
  cityPattern,
  countryPattern,
  descriptionPattern,
  maxApplicantsPattern,
  statePattern,
  timeEventPattern,
  titlePattern,
  typeEventPattern,
  urlPattern,
  zipCodePattern
} from '@/utils/pattern.utils'
import {
  validateDate,
  validateDeadline,
  validateEndDate
} from '@/utils/validateDatesEvent.util'
import { useMutation } from '@apollo/client'
import { CREATE_EVENT } from '@/graphql/events/create.mutation'
import { useAuth } from '@/context/providers/auth.provider'
import SelectComponent from '@/components/Select'

const CreateEvent = () => {
  const { user } = useAuth()

  console.log('====================================')
  console.log(user)
  console.log('====================================')
  const [CreateEventMutation] = useMutation(CREATE_EVENT)
  const {
    register,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit
  } = useForm<any>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<any> = async (data) => {
    const formData = {
      ...data,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      deadline: new Date(data.deadline).toISOString(),
      spots: parseFloat(data.spots),
      type: data.type ? data.type : 'public'
    }

    try {
      console.log('register event', formData)
      const event = await CreateEventMutation({
        variables: {
          createEventInput: {
            title: formData.title,
            description: formData.description,
            startDate: formData.startDate,
            endDate: formData.endDate,
            deadline: formData.deadline,
            time: formData.time,
            spots: formData.spots,
            type: formData.type,
            owner: user?.id,
            thumbnail: formData.thumbnail
              ? formData.thumbnail
              : 'https://images.unsplash.com/photo-1543964198-d54e4f0e44e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
            location: {
              adress: formData.adress,
              city: formData.city,
              state: formData.state,
              zipCode: formData.zipCode,
              country: formData.country
            }
          },
          image: formData.thumbnail
        }
      })
      console.log('====================================')
      console.log(event)
      console.log('====================================')
    } catch (error) {
      console.error('Error event catch:', error)
    }
  }

  return (
    <PanelLayout title='Crear Evento'>
      <form
        className='flex flex-col w-full flex-wrap md:flex-nowrap items-end gap-6 font-inter'
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-col md:grid grid-cols-2 gap-[20px] w-full'>
          <div className='flex flex-col flex-wrap max-h-fit py-6 gap-[14px] '>
            <Input
              type='text'
              name='title'
              label='Titulo'
              placeholder='Ingrese un titulo para el evento'
              className='my-3'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: titlePattern.value,
                    message: titlePattern.message
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.title?.message?.toString()}
            />

            <Input
              type='text'
              name='description'
              label='Descripcion'
              className='my-3'
              placeholder='Ingrese una descripcion'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: descriptionPattern.value,
                    message: descriptionPattern.message
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.description?.message?.toString()}
            />
            <Input
              label='Lugares'
              name='spots'
              className='my-3'
              placeholder='Cantidad maxima de asistentes'
              type='number'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: maxApplicantsPattern.value,
                    message: maxApplicantsPattern.message
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.spots?.message?.toString()}
            />
            <Input
              type='text'
              name='thumbnail'
              label='Portada'
              placeholder='Ingrese una portada para el evento'
              className='  bg-[#e5e5e5] '
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: urlPattern.value,
                    message: urlPattern.message
                  },
                  required: { value: false, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.thumbnail?.message?.toString()}
            />
            <SelectComponent
              name='type'
              label='Tipo de evento'
              placeholder='Privado tendra que aceptar a las personas que quiera admitir al evento'
              className='  bg-[#e5e5e5] '
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: typeEventPattern.value,
                    message: typeEventPattern.message
                  },
                  required: { value: false, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.type?.message?.toString()}
              options={[
                { label: 'Publico', value: 'public' },
                { label: 'Privado', value: 'private' }
              ]}
              defaultValue='public'
            />
          </div>

          <div className='flex flex-col flex-wrap py-6 gap-[14px]'>
            <Input
              type='date'
              name='startDate'
              label='Fecha de inicio'
              placeholder='Ingrese la fecha de inicion para el evento'
              hookForm={{
                register,
                validations: {
                  validate: (value: string) => {
                    const date = validateDate(new Date(value))
                    if (!date) return 'Date must be after today'
                    return date
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.startDate?.message?.toString()}
            />
            <Input
              type='date'
              name='endDate'
              label='Fecha de finalizacion'
              placeholder='Ingrese la fecha de finalizacion del evento'
              hookForm={{
                register,
                validations: {
                  validate: (value: string) => {
                    const startDate = getValues()?.startDate
                    console.log('startDate')
                    console.log(startDate)
                    const date = validateEndDate(
                      new Date(startDate),
                      new Date(value)
                    )
                    if (!date) {
                      return 'Date must be after today and after or equal to startDate'
                    }
                    return date
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.endDate?.message?.toString()}
            />
            <Input
              type='date'
              name='deadline'
              label='Cierre de inscripcion'
              placeholder='Ingrese el cierre de inscripcion para el evento'
              hookForm={{
                register,
                validations: {
                  validate: (value: string) => {
                    const startDate = getValues()?.startDate
                    const date = validateDeadline(
                      new Date(startDate),
                      new Date(value)
                    )
                    if (!date) {
                      return 'Date must be after today and prior or equal to startDate'
                    }
                    return date
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.deadline?.message?.toString()}
            />

            <Input
              label='Hora del evento'
              name='time'
              placeholder='Hora del evento. Ej: 10:30 AM'
              type='text'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: timeEventPattern.value,
                    message: timeEventPattern.message
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.time?.message?.toString()}
            />
          </div>

          <div className='flex flex-col w-full items-center py-6 gap-[14px]'>
            <Input
              type='text'
              name='country'
              label='Pais'
              placeholder='Ingrese un pais para el evento'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: countryPattern.value,
                    message: countryPattern.message
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.country?.message?.toString()}
            />
            <Input
              type='text'
              name='state'
              label='Estado'
              placeholder='Ingrese un estado para el evento'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: statePattern.value,
                    message: statePattern.message
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.state?.message?.toString()}
            />
            <Input
              type='text'
              name='city'
              label='Ciudad'
              placeholder='Ingrese una ciudad para el evento'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: cityPattern.value,
                    message: cityPattern.message
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.city?.message?.toString()}
            />
            <Input
              type='text'
              name='adress'
              label='Direccion '
              placeholder='Ingrese una direccion para el evento'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: adressPattern.value,
                    message: adressPattern.message
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.adress?.message?.toString()}
            />
            <Input
              type='text'
              name='zipCode'
              label='Zip Code'
              placeholder='Ingrese el codigo de la ciudad del evento'
              hookForm={{
                register,
                validations: {
                  pattern: {
                    value: zipCodePattern.value,
                    message: zipCodePattern.message
                  },
                  required: { value: true, message: 'This field is required' }
                }
              }}
              errorMessage={errors?.zipCode?.message?.toString()}
            />
          </div>
        </div>
        <Button
          isDisabled={!user}
          type='submit'
          isLoading={isSubmitting}
          title='Guardar'
        />
      </form>
    </PanelLayout>
  )
}

export default CreateEvent
