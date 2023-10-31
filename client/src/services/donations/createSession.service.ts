import { httpClient as http } from '@/services/api.service'

export const createSession = async (price: number) => {
  try {
    const { data } = await http.post('/payments/create-session', {
      price
    })
    return data
  } catch (error) {
    return []
  }
}
