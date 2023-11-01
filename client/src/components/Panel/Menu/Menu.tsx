import { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { UtilRoutes } from '@/utils/routes.utils'
import logo from '@/assets/logo.png'
import { topItems } from './topItems.lib'
import MenuButton from './Button'
import configuracion_light from '@/assets/botones/configuracion_light.png'
import configuracion_dark from '@/assets/botones/configuracion_dark.png'
import cerrarsesion_light from '@/assets/botones/cerrarsesion_light.png'
import cerrarsesion_dark from '@/assets/botones/cerrarsesion_dark.png'

const Home = () => {
  const [open, setOpen] = useState(true)
  return (
    <section className='flex'>
      <div className={`bg-white min-h-screen ${open ? 'w-[200px]' : 'w-[120px]'} duration-500 text-teal-800 px-4`}>
        <div className='py-3 flex justify-end'>
          <HiMenuAlt3
            size={26}
            className='cursor-pointer'
            onClick={() => { setOpen(!open) }}
          />
        </div>
        <div className='pb-6 flex justify-center md:justify-center'>
          <Link to={UtilRoutes.HOME} style={{ userSelect: 'none' }}>
            <img src={logo} alt='Logo' title='Logo' />
          </Link>
        </div>
        <div className='mt-8 md:mt-[100px] flex flex-col gap-4'>

          {topItems?.map((item, index) => (

            <MenuButton
              key={index}
              ruta={item.ruta}
              texto={item.texto}
              iconlight={item.iconlight}
              icondark={item.icondark}
            />

          ))}
        </div>
        <div className='flex flex-col items-center justify-center gap-2 mt-[140px] md:mt-[140px] w-full'>
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
      </div>
    </section>
  )
}

export default Home
