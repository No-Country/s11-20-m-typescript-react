import { GET_USER } from '../../services/user/get.user'
import { useMutation } from '@apollo/client'

import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email address')
    .required('Email Required'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Password is required')
})
type FormData = yup.InferType<typeof schema>

export const UseFormLogin = () => {
  const [loginMutation] = useMutation(GET_USER)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { email, password } = data
    const response = await loginMutation({ variables: { email, password } })
    console.log(response.data)
  }

  return {
    onSubmit,
    register,
    handleSubmit,
    errors
  }
}
