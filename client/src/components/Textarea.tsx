import { Textarea as TextareaUI } from '@nextui-org/react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
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
  defaultValue?: string
  rows?: number
}

const Textarea = ({
  name,
  label,
  handleChange = () => {},
  errorMessage = '',
  placeholder = '',
  className = '',
  hookForm,
  defaultValue = '',
  rows = 1
}: InputProps) => {
  const HookForm = hookForm?.register(name, hookForm?.validations)
  return (
    <TextareaUI
      {...HookForm}
      label={label}
      labelPlacement='outside'
      name={name}
      defaultValue={defaultValue}
      minRows={rows}
      classNames={{
        label: 'text-teal-800 font-semibold'
      }}
      className={className}
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

export default Textarea
