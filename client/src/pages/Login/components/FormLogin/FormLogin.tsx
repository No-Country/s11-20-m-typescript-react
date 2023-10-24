import { useState } from 'react'
import { Input,Button } from '@nextui-org/react'
import { EyeFilledIcon } from '../icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../icons/EyeSlashFilledIcon'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { UseFormLogin } from '../../../../hooks'


export const FormLogin = () =>{
  const {onSubmit,handleSubmit,errors,register} = UseFormLogin()

  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
 
  
  return (
    <form 
      className="flex flex-col w-[351px] flex-wrap md:flex-nowrap gap-4 font-inter"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input 
        {...register('email')}
        classNames={{
          label: 'text-teal-800 font-semibold',
        }}
        isInvalid={!errors.email ? false:true }
        errorMessage={errors.email?.message}
        size='sm' 
        type="email" 
        name="email"
        label="Email" 
        placeholder="Ingresa tu email" />
      
      <Input

        {...register('password')}
        classNames={{
          label: 'text-teal-800 font-semibold',
        }}
        isInvalid={!errors.password ?false :true}
        errorMessage={errors.password?.message}
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
     
      <Link to="/" color="foreground" className='flex flex-row-reverse text-teal-800 hover:underline' style={{userSelect: 'none',}}>
        Forgot your password?
      </Link>
      
      <Button 
        type='submit' 
        className='bg-yellow-400'
      >
        Ingresar
      </Button>

      <h1 id='h2' className='flex flex-row justify-center'>
        <span>Login with Google</span>
      </h1>

      <div className='flex flex-row justify-center'>
        <Button 
          style={{ width: '64px', height: '64px',border:'solid #B8B8B8 1px' }}
          className='flex flex-row justify-center  bg-white'>
          <FcGoogle  style={{ fontSize: '4rem'}} />
        </Button>
      </div>

      <Link to="/register" color="foreground" className='flex flex-row justify-center mt-7 mb-1 gap-2' style={{userSelect: 'none'}}>
        Don't have an account?{'\u00A0'} 
        <span className='text-teal-800 font-bold'>Sign-up</span>
      </Link>
      
    </form>
  )
}