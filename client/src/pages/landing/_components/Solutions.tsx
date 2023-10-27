import { TextElement } from '@/components';
import { Link } from 'react-router-dom';
import C3 from '@/assets/cards/C3.png';
import C4 from '@/assets/cards/C4.png';
import C5 from '@/assets/cards/C5.png';

function Solutions () {

  return (

    <section className="flex flex-row justify-center items-center h-[317px] bg-white mt-[70px]">

        <div className='flex flex-row gap-[20px]'>

            <div className='flex flex-col justify-center items-end w-[346px] h-[317px] gap-[20px]'>  
                <img draggable="false" src={C3} alt="Reciclaje de equipos electronicos" className='select-none' />
                <TextElement as='h3' type='t1' className='text-base leading-6 font-semibold text-gray-500'>Hábitos sustentables: cuál es la iniciativa que reconoce las acciones ecológicas de los porteños con importantes premios.</TextElement>
                <Link draggable="false" to={"/auth"} className='text-xs leading-4 font-semibold text-teal-800 pt-7 select-none'>Leer Nota</Link>
            </div>

            <div className='flex flex-col justify-center items-end w-[346px] h-[317px] gap-[20px]'>  
                <img draggable="false" src={C4} alt="Reciclaje de equipos electronicos" className='select-none' />
                <TextElement as='h3' type='t1' className='text-base leading-6 font-semibold text-gray-500'>El 60% de los argentinos está dispuesto a cambiar sus hábitos alimentarios para cuidar el medioambiente.</TextElement>
                <Link draggable="false" to={"/auth"} className='text-xs leading-4 font-semibold text-teal-800 pt-7 select-none'>Leer Nota</Link>
            </div>

            <div className='flex flex-col justify-center items-end w-[346px] h-[317px] gap-[20px]'>  
                <img draggable="false" src={C5} alt="Reciclaje de equipos electronicos" className='select-none' />
                <TextElement as='h3' type='t1' className='text-base leading-6 font-semibold text-gray-500'>Soluciones ecológicas: cómo adquirir hábitos sustentables para preservar el medio ambiente.</TextElement>
                <Link draggable="false" to={"/auth"} className='text-xs leading-4 font-semibold text-teal-800 pt-7 select-none'>Leer Nota</Link>
            </div>

        </div>

    </section>

  )

}

export default Solutions