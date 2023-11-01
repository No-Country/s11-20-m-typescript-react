import { Select, SelectItem } from '@nextui-org/react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface SelectProps {
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
  options: Array<{ label: string; value: string }>
}

const SelectComponent = ({
  name,
  label,
  errorMessage = '',
  placeholder = '',
  className = '',
  hookForm,
  defaultValue = '',
  size = 'md',
  options
}: SelectProps) => {
  const HookForm = hookForm?.register(name, hookForm?.validations)
  return (
    <Select
      {...HookForm}
      isRequired
      label={label}
      labelPlacement='outside'
      name={name}
      size={size}
      defaultValue={defaultValue.toString()}
      classNames={{
        label: 'text-teal-800 font-semibold'
      }}
      className={'text-teal-800 font-semibold min-w-0' + className}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onChange={async (e: React.ChangeEvent<HTMLSelectElement>) =>
        await HookForm?.onChange(e)}
      placeholder={placeholder}
      isInvalid={errorMessage.length > 0}
      errorMessage={errorMessage}
    >
      {options.map((animal) => (
        <SelectItem key={animal.value} value={animal.value}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
  )
}

export default SelectComponent
