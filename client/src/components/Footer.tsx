import logo_dark from '@/assets/logo_dark.png'
import { TextElement } from '@/components'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer className='h-[261px] select-none mt-6'>
    <div className='flex flex-col justify-around items-center bg-teal-800 h-[205px] md:flex-row'>
      <div className='flex flex-col items-center justify-center gap-[20px] md:flex-row'>
        <img
          draggable='false'
          src={logo_dark}
          alt='Earthpoints Logo en formato oscuro'
          className='hover:opacity-70 mt-3 md:mt-0'
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

      <div className='h-[64px] w-[281px] flex flex-row gap-[20px] md:flex-col mt-6 md:mt-0'>
        <Link
          draggable='false'
          title='Politica de privacidad'
          to='/privacy'
          className='text-xs leading-4 font-medium text-white hover:text-green-300'
        >
          Politica de privacidad
        </Link>

        <Link
          draggable='false'
          title='Terminos y condiciones'
          to='/terms'
          className='text-xs leading-4 font-medium text-white hover:text-green-300'
        >
          Terminos y condiciones
        </Link>
      </div>
    </div>

    <div className='bg-gray-900 h-[56px]' />
  </footer>
)

export default Footer
