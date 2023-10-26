import { Input as InputUI } from '@nextui-org/react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
  type: string
  name: string
  label?: string
  wrapperIntupClassName?: string
  placeholder: string
  className?: string
  handleChange?: (e: string) => void
  errorMessage?: string
  hookForm?: {
    register: UseFormRegister<any>
    validations: RegisterOptions
  }
  defaultValue?: string | number
  size?: 'sm' | 'md' | 'lg'
}

const Input = ({
  type,
  name,
  label,
  handleChange = () => {},
  errorMessage = '',
  placeholder = '',
  className = '',
  hookForm,
  defaultValue = '',
  size = 'md'
}: InputProps) => {
  const HookForm = hookForm?.register(name, hookForm?.validations)
  return (
    <InputUI
      {...HookForm}
      type={type}
      label={label}
      labelPlacement='outside'
      name={name}
      size={size}
      defaultValue={defaultValue.toString()}
      autoComplete='off'
      classNames={{
        label: 'text-teal-800 font-semibold'
      }}
      className={'text-teal-800 font-semibold min-w-0' + className}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onChange={async (e: React.ChangeEvent<HTMLInputElement>) =>
        await HookForm?.onChange(e)}
      onValueChange={(value: string) => {
        handleChange(value)
      }}
      placeholder={placeholder}
      isInvalid={errorMessage.length > 0}
      errorMessage={errorMessage}
    />
  )
}

export default Input
