import { useState } from 'react'
interface FormValues {

  name: string;
  lastname: string;
  email: string;
  username: string;
  birthdate: string;
  password: string;

}

export const UseFormRegister = () => {

  const [formData, setFormData] = useState<FormValues> ({

    name: '',
    lastname: '',
    email: '',
    username: '',
    birthdate: '',
    password: '',

  })
  
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const isFormValid = isEmailValid && isPasswordValid

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData.password,formData.email)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      setIsEmailValid(emailRegex.test(value))
    }
    if (name === 'password') {
      setIsPasswordValid(value.length >= 8)
    }
  }
  return { isFormValid, handleSubmit, handleChange, formData }
}
