import { Link } from 'react-router-dom';
import { Button } from '@/components';
import logo from '@/assets/logo.png';

function Header () {

  return (

    <header className='flex h-[88px] w-screen justify-between items-center px-[96px] bg-[#0000001a] select-none'>
        
        <Link draggable="false" className='hover:opacity-70' to="/" title='Refrescar esta pagina'>

          <img draggable="false" src={logo} alt="Earthpoints Logo"/>

        </Link>
        
        <Button title="Ingresar" href="/auth" color='secondary' className='text-black rounded-lg hover:bg-yellow-500' size='md'/>

    </header>

  )
}

export default Header