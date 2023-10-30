import logo_dark from '@/assets/logo_dark.png'
import { TextElement } from '@/components'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className='h-[261px] select-none mt-14'>
    <div className='flex flex-row justify-around items-center bg-teal-800 h-[205px]'>
      <div className='flex flex-row items-center justify-center gap-[50px]'>
        <img
          draggable='false'
          src={logo_dark}
          alt='Earthpoints Logo en formato oscuro'
          className='hover:opacity-70'
        />

        <div className='h-[64px] w-[281px]'>
          <TextElement
            as='h3'
            type='t1'
            className='text-xs leading-4 font-normal text-white'
          >
            Earthpoints se asocia con ciudades y marcas para recompensar a los
            residentes por ayudar a que sus comunidades sean lugares más limpios
            y verdes.
          </TextElement>
        </div>
      </div>

      <div className='h-[64px] w-[281px] flex flex-col gap-[10px]'>
        <Link
          draggable='false'
          to='/privacy'
          className='text-xs leading-4 font-medium text-white'
        >
          Politica de privacidad
        </Link>

        <Link
          draggable='false'
          to='/terms'
          className='text-xs leading-4 font-medium text-white'
        >
          Terminos y condiciones
        </Link>
      </div>
    </div>

    <div className='bg-gray-900 h-[56px]' />
  </footer>
)

export default Footer