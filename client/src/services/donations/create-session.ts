import { httpClient as http } from '@/services/api.service'

export const createSession = async (price: number) => {
  const { data } = await http.post('/payments/create-session', {
    price
  })
  return data
}
