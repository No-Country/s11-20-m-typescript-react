import logo from '@/assets/logo.png'
import configuracion_light from '@/assets/botones/configuracion_light.png'
import configuracion_dark from '@/assets/botones/configuracion_dark.png'
import cerrarsesion_light from '@/assets/botones/cerrarsesion_light.png'
import cerrarsesion_dark from '@/assets/botones/cerrarsesion_dark.png'
import { Link } from 'react-router-dom'
import MenuButton from './Button'
import { UtilRoutes } from '@/utils/routes.utils'
import { topItems } from './topItems.lib'

const Menu = () => (
  <aside className='bg-white sticky top-0 flex flex-col items-center justify-between h-screen min-w-[250px] px-7'>
    <div className='flex flex-col gap-[40px] w-full'>
      <div className='flex flex-col items-center justify-between mt-8 w-full'>
        <Link to={UtilRoutes.HOME} style={{ userSelect: 'none' }}>
          <img src={logo} alt='Logo' title='Logo' height='41px' width='95px' />
        </Link>
      </div>
      <div className='flex flex-col  items-center gap-2 justify-between w-full'>
        {topItems.map((item, index) => (
          <MenuButton
            key={index}
            ruta={item.ruta}
            texto={item.texto}
            iconlight={item.iconlight}
            icondark={item.icondark}
          />
        ))}
      </div>
    </div>
    <div className='flex flex-col items-center justify-between gap-2 mb-8 w-full'>
      <MenuButton
        ruta={UtilRoutes.CONFIGURATION}
        texto='Configuración'
        iconlight={configuracion_light}
        icondark={configuracion_dark}
      />
      <MenuButton
        ruta={UtilRoutes.LOGOUT}
        texto='Cerrar sesión'
        iconlight={cerrarsesion_light}
        icondark={cerrarsesion_dark}
      />
    </div>
  </aside>
)

export default Menu
