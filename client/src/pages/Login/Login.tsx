import { Button } from '@nextui-org/react'
import { CardBox } from './components/Cards/CardBox'
import { UserData } from '../../interfaces/user'
import { useQuery } from '@apollo/client'
import { GET_USERS } from '../../utils'

export const Login = () => {
  const {data, error, loading} = useQuery<UserData>(GET_USERS)
  
  if (loading) return <p>Loading...</p>
  if (error) return <div>Failed to load</div>

  const { users } = data || { users: [] }

  return (
    <div>
      <h1>Login</h1>
      <Button>Probando</Button>
      {!loading 
        ?<div className='flex gap-3'>

            
          {users.map(user =>
            <CardBox key={user.username} user={user}/>
          )}
        </div> 
        :<></>}
      {!loading ? <p>{JSON.stringify(users, null, 2)}</p> : 'Loading...'}
    </div>
  )
}

