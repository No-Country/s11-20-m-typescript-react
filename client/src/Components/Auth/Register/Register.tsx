import { useState } from 'react'
import { EyeFilledIcon } from '../icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../icons/EyeSlashFilledIcon'
import { Input, Button } from '@nextui-org/react'
import { UseFormRegister } from '../../../hooks'
import { Link } from 'react-router-dom'

export const Register = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => { setIsVisible(!isVisible) }
  const { isFormValid, handleSubmit, handleChange, formData } =
    UseFormRegister()

  return (
    <form
      className='flex flex-col w-[351px] flex-wrap md:flex-nowrap gap-4 font-inter'
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <Input
        id='input'
        onChange={handleChange}
        value={formData.name}
        isRequired
        classNames={{ label: 'text-teal-800 font-semibold' }}
        size='sm'
        type='text'
        name='name'
        label='Nombre'
        placeholder='Ingrese su nombre'
      />

      <Input
        id='input'
        onChange={handleChange}
        value={formData.lastname}
        isRequired
        classNames={{ label: 'text-teal-800 font-semibold' }}
        size='sm'
        type='text'
        name='lastname'
        label='Apellido'
        placeholder='Ingrese su apellido'
      />

      <Input
        id='input'
        onChange={handleChange}
        value={formData.email}
        isRequired
        classNames={{ label: 'text-teal-800 font-semibold' }}
        size='sm'
        type='email'
        name='email'
        label='Email'
        placeholder='Ingrese su Email'
      />

      {/* <Input id='input' onChange={handleChange} value={formData.username} isRequired classNames={{label: 'text-teal-800 font-semibold',}} size='sm' type="text" name="username" label="Usuario" placeholder="Ingrese un nombre de usuario" /> */}

      <Input
        id='input'
        onChange={handleChange}
        value={formData.birthdate}
        isRequired
        classNames={{ label: 'text-teal-800 font-semibold' }}
        size='sm'
        type='date'
        name='birthdate'
        label='Fecha de nacimiento'
        placeholder='Ingrese su fecha de nacimiento'
      />

      <Input
        autoComplete='false'
        onChange={handleChange}
        value={formData.password}
        isRequired
        classNames={{ label: 'text-teal-800 font-semibold' }}
        size='sm'
        label='Contraseña'
        name='password'
        placeholder='Contraseña'
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

      <Button
        isDisabled={!isFormValid}
        type='submit'
        className='bg-yellow-400 font-bold text-black-950 hover:bg-teal-800 hover:text-yellow-400'
      >
        Register
      </Button>

      <Link
        to='/login'
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
