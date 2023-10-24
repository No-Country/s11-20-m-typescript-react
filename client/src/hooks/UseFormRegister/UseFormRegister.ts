import {  useMutation } from '@apollo/client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { CREATE_USER } from '../../utils'

const schema = yup.object({
  firstName: yup.string(),
  lastName: yup.string(),
  username: yup.string().min(8,'must be at least 8 characters long'),
  password: yup.string().matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, 'Password must be at least 8 characters long, contain an uppercase letter, and a number'),
  email: yup.string().email(),
  birthday: yup.date(),
})

type FormData = yup.InferType<typeof schema>;


export const UseFormRegister = () => {

  const [CreateUserMutation,] = useMutation(CREATE_USER)

  const { register,handleSubmit, formState: { errors }} = useForm<FormData>({
    defaultValues:{
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      birthday: undefined,
      email: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    const response = await CreateUserMutation({
      variables:{
        createUserInput:{
          firstName:data.firstName,
          lastName: data.lastName,
          username: data.username,
          password: data.password,
          birthday: data.birthday,
          email: data.email
        }
      }
    })
    console.log(response.data)
  }

  return {
    register,handleSubmit,onSubmit,errors
  } 

}


