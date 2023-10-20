import { useState } from 'react'
import { useMutation} from '@apollo/client'
import { GET_USER } from '../../utils'


interface FormValues {
  email: string
  password: string
}

export const UseFormLogin = () => {

  const [loginMutation, { data }] = useMutation(GET_USER)

  const [formData, setFormData] = useState<FormValues>({
    email: '',
    password: '',
  })
  
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const isFormValid = isEmailValid && isPasswordValid

  const handleLogin = async () =>{
    const response = await loginMutation({
      variables:{
        email: formData.email,
        password: formData.password
      }
      
    })
    console.log(response.data)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleLogin()
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
  return { isFormValid, handleSubmit, handleChange, formData, data }
}
