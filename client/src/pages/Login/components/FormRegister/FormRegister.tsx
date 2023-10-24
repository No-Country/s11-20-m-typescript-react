import { useState } from 'react'
import { EyeFilledIcon } from '../icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../icons/EyeSlashFilledIcon'
import { Input, Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { UseFormRegister } from '../../../../hooks'


export const FormRegister = () =>{
  const {register,handleSubmit,onSubmit,errors } = UseFormRegister()

  const [isVisible, setIsVisible] = useState (false)
  const toggleVisibility = () => setIsVisible (!isVisible)


  return (
    <form 
      className="flex flex-col w-[351px] flex-wrap md:flex-nowrap gap-4 font-inter"
      onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

      <Input 
        {...register('firstName')}
        isRequired 
        classNames={{label: 'text-teal-800 font-semibold',}} 
        size='sm' type="text" name="firstName" label="Enter your name" placeholder="Please enter your name" />

      <Input 
        {...register('lastName')}
        isRequired 
        classNames={{label: 'text-teal-800 font-semibold',}} 
        size='sm' type="text" name="lastName" label="Enter your lastname" placeholder="Please enter your lastname" />
      
      <Input 
        {...register('username')}
        isInvalid={!errors.username?false :true}
        errorMessage={errors.username?.message}
        isRequired 
        classNames={{label: 'text-teal-800 font-semibold',}} 
        size='sm' type="text" name="username" label="Enter your nick" placeholder="Please enter your nick" />

      <Input 
        {...register('email')}
        isInvalid={!errors.email ? false:true }
        errorMessage={errors.email?.message}
        isRequired 
        classNames={{label: 'text-teal-800 font-semibold',}}
        size='sm' type="email" name="email" label="Enter your email" placeholder="Please enter your last name" />

      <Input 
        {...register('birthday')}
        isRequired 
        classNames={{label: 'text-teal-800 font-semibold',}} 
        size='sm' type="date" name="birthday" label="Enter your birthday" placeholder="Please enter your birthday" />

      <Input 
        {...register('password')}
        isInvalid={!errors.password ?false :true}
        errorMessage={errors.password?.message}
        autoComplete='false' 
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