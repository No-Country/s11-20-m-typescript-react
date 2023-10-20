import { useState } from 'react'
import { useMutation} from '@apollo/client'
import { CREATE_USER } from '../../utils'

interface FormValues {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  birthdate: string;
  password: string;

}

export const UseFormRegister = () => {

  const [createUserMutation, { data} ] = useMutation(CREATE_USER)

  const [formData, setFormData] = useState<FormValues> ({
    firstName: '',
    lastName: '',
    username:'',
    email: '',
    birthdate: '',
    password: '',

  })
  
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)

  const isFormValid = isEmailValid && isPasswordValid
  console.log(formData)
  const handleCreate = async () => {
    try {
      const response = await createUserMutation({
        variables: {
          createUserInput: {
            firstName: 'Marcos',
            lastName: 'lamas',
            username: 'pedritolame2',
            password: 'Lean1234',
            birthday: '2005-02-25T14:30:00.000Z',
            email: 'pedrito22@gmail.com'
          },
        },
      })
    
      console.log(response)
     
    } catch (error) {
      console.error(error)
    }
  }
  

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault()
    await handleCreate()
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