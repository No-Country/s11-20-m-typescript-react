import { httpClient as http } from '@/services/api.service'

export const createSession = async (priceId: string) => {
  const { data } = await http.post('/payments/create-session', {
    priceId
  })
  return data
}
