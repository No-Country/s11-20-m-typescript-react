import { NavLink } from 'react-router-dom'
import ayuda from '@/assets/botones/ayuda.png'
import { UtilRoutes } from '@/utils/routes.utils'
import { Button } from '..'

interface TopBarProps {
  ruta?: string
  title: string
}

const TopBar = (props: TopBarProps) => (
  <header className='flex w-full justify-between items-center bg-[#e5e5e5] py-6 px-9 '>
    <NavLink
      to={props?.ruta ?? ''}
      className='font-inter fill-black font-semibold text-base'
    >
      {props.title}
    </NavLink>
    <div className='flex w-full justify-end gap-5 items-center'>
      <NavLink to={UtilRoutes.HELP}>
        <img title='Ayuda' src={ayuda} alt='Sidebark link (Ayuda)' />
      </NavLink>
      <Button href={UtilRoutes.DONATE} size='md' title='Donar' />
    </div>
  </header>
)

export default TopBar
