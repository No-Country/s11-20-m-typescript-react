import { useState } from 'react'
import { EyeFilledIcon } from '../icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../icons/EyeSlashFilledIcon'
import { Input, Button } from '@nextui-org/react'
import { UseFormRegister } from '../../../../hooks'
import { Link } from 'react-router-dom'

export const FormRegister = () =>{

  const [isVisible, setIsVisible] = useState (false)
  const toggleVisibility = () => setIsVisible (!isVisible)
  const {isFormValid, handleSubmit, handleChange, formData} = UseFormRegister ()

  return (
    <form 
      className="flex flex-col w-[351px] flex-wrap md:flex-nowrap gap-4 font-inter"
      onSubmit={handleSubmit} autoComplete='off'>

      <Input 
        onChange={handleChange} 
        value={formData.firstName} 
        isRequired 
        classNames={{label: 'text-teal-800 font-semibold',}} 
        size='sm' type="text" name="firstName" label="Enter your name" placeholder="Please enter your name" />

      <Input 
        onChange={handleChange} 
        value={formData.lastName} 
        isRequired 
        classNames={{label: 'text-teal-800 font-semibold',}} 
        size='sm' type="text" name="lastName" label="Enter your lastname" placeholder="Please enter your lastname" />
      
      <Input 
        onChange={handleChange} 
        value={formData.username} 
        isRequired 
        classNames={{label: 'text-teal-800 font-semibold',}} 
        size='sm' type="text" name="username" label="Enter your nick" placeholder="Please enter your nick" />

      <Input 
        onChange={handleChange} 
        value={formData.email} 
        isRequired 
        classNames={{label: 'text-teal-800 font-semibold',}}
        size='sm' type="email" name="email" label="Enter your email" placeholder="Please enter your last name" />

      <Input 
        onChange={handleChange}
        value={formData.birthdate} 
        isRequired 
        classNames={{label: 'text-teal-800 font-semibold',}} 
        size='sm' type="date" name="birthdate" label="Enter your birthdate" placeholder="Please enter your birthdate" />

      <Input 
        autoComplete='false' 
        onChange={handleChange} 
        value={formData.password} 
        isRequired 
        classNames={{ label: 'text-teal-800 font-semibold', }}
        size='sm' label="Password" name="password" placeholder="Please enter your password" 
        
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

      <Button
        isDisabled={!isFormValid} 
        type='submit' 
        className='bg-yellow-400 font-bold text-black-950 hover:bg-teal-800 hover:text-yellow-400'
      >
        Register
      </Button>

      <Link to="/login" color="foreground" className='flex flex-row justify-center mt-7 mb-1 gap-2' style={{userSelect: 'none'}}>
        Already have an account?{'\u00A0'} 
        <span className='text-teal-800 font-bold'>Sign-in</span>
      </Link>

    </form>
  )
}