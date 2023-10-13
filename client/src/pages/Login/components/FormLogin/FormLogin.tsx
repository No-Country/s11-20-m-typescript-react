import { useState } from 'react'
import { Input } from '@nextui-org/react'
import { EyeFilledIcon } from '../icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../icons/EyeSlashFilledIcon'


export const FormLogin = () =>{

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4 ">
      <Input isRequired type="email" label="Email" placeholder="Enter your email" />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
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
        className="max-w-xs"
      />
    </div>
  )
}