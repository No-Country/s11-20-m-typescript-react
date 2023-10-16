import { useState } from 'react'
import { Input,Button } from '@nextui-org/react'
import { EyeFilledIcon } from '../icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../icons/EyeSlashFilledIcon'
import { UseFormLogin } from '../../../../hooks/'
import { FcGoogle } from 'react-icons/fc'

export const FormLogin = () =>{

  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const {isFormValid, handleSubmit,handleChange,formData} = UseFormLogin()

  return (
    <form 
      className="flex flex-col w-[351px] flex-wrap md:flex-nowrap gap-4 "
      onSubmit={handleSubmit}>
      <Input 
        onChange={handleChange}
        value={formData.email}
        isRequired 
        classNames={{
          label: 'text-teal-800',
        }}
        size='sm' 
        type="email" 
        name="email"
        label="Email" 
        placeholder="Ingresa tu email" />
      <Input
        onChange={handleChange}
        value={formData.password}
        isRequired
        classNames={{
          label: 'text-teal-800',
        }}
        size='sm'
        label="Password"
        name="password"
        placeholder="Ingresa tu password"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
      />
      <p className='flex flex-row-reverse text-teal-800' >¿olvidaste tu contraseña?</p>
      <Button
        isDisabled={!isFormValid} 
        type='submit' 
        className='bg-yellow-400'
      >
        Ingresar
      </Button>
      <p className='flex flex-row justify-center'>inicia sesion con Google</p>
      <div className='flex flex-row justify-center'>
        <Button 
        
          style={{ width: '64px', height: '64px',border:'solid #B8B8B8 1px' }}
          className='flex flex-row justify-center  bg-white'>
          <FcGoogle  style={{ fontSize: '4rem'}} />
        </Button>
      </div>
      <p className='flex flex-row justify-center mt-10 mb-2'>
        ¿no tienes cuenta?{'\u00A0'} 
        <span className='text-teal-800'>
           Registrate</span>
      </p>
    </form>
  )
}