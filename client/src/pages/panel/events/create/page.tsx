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
  zipCodePattern
} from '@/utils/pattern.utils'
import {
  validateDate,
  validateDeadline,
  validateEndDate
} from '@/utils/validateDatesEvent.util'
import { useMutation } from '@apollo/client'
import { CREATE_EVENT } from '@/graphql/events/create.mutation'

const CreateEvent = () => {
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
    console.log('====================================')
    console.log(data)
    console.log('====================================')
    const formData = {
      ...data,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      deadline: new Date(data.deadline).toISOString(),
      spots: parseFloat(data.spots),
      type: 'public'
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
            owner: '651e0f027f42a42e875b70d4',
            thumbnail:
              'https://images.unsplash.com/photo-1543964198-d54e4f0e44e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
            location: {
              adress: formData.adress,
              city: formData.city,
              state: formData.state,
              zipCode: formData.zipCode,
              country: formData.country
            }
          }
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
        <div className='flex flex-col md:grid grid-cols-2 gap-5 w-full'>
          <div className='flex flex-col flex-wrap max-h-fit'>
            <Input
              type='text'
              name='title'
              label='Titulo'
              placeholder='Ingrese un titulo para el evento'
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
              errorMessage={errors?.image?.message?.toString()}
            />

            <Input
              type='text'
              name='description'
              label='Descripcion'
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
              type='file'
              name='thumbnail'
              label='Portada'
              placeholder='Ingrese una portada para el evento'
              className=' w-full flex items-center justify-center bg-transparent '
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
          </div>

          <div className='flex flex-col flex-wrap'>
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

          <div className='flex flex-col w-full items-center'>
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
        <Button type='submit' isLoading={isSubmitting} title='Guardar' />
      </form>
    </PanelLayout>
  )
}

export default CreateEvent
