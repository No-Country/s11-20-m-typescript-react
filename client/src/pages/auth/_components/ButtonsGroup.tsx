import { UtilRoutes } from '@/utils/routes.utils'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import login from '@/assets/botones/login.png'
import register from '@/assets/botones/register.png'

const ButtonsGroup = () => (
  <div className='flex flex-col'>
    <Button
      className='w-[70px] h-[138px] bg-white rounded-tl-xl hover:bg-blue-200'
      radius='none'
      as={Link}
      to={UtilRoutes.LOGIN}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img src={login} alt='Starting menu link (login)' />
      <span className='font-semibold'>Inicio</span>
    </Button>
    <Button
      className='w-[70px] h-[138px] bg-white rounded-bl-xl hover:bg-blue-200'
      radius='none'
      as={Link}
      to={UtilRoutes.REGISTER}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <img src={register} alt='Starting menu link (register)' />
      <span className='font-semibold'>Registro</span>
    </Button>
  </div>
)

export default ButtonsGroup
