import { TextElement, Button  } from '@/components';
import C1 from '../../assets/cards/C1.png';
import C2 from '../../assets/cards/C2.png';

function Habits () {

  return (

    <section className="flex flex-col justify-center h-[336px] bg-white">

        <div className='h-[304px] bg-gray-200 flex flex-row justify-around items-center relative'>

            <div className='flex flex-col justify-center mb-4 items-start'>

                <div className='flex flex-row gap-3 items-end'>
                    <TextElement as='h3' type='habits_TUS'>Tus</TextElement>
                    <TextElement as='h3' type='habits_WORD'>hábitos,</TextElement>
                </div>

                <div className='flex flex-row gap-3 items-end'>
                    <TextElement as='h3' type='habits_TUS'>Tus</TextElement>
                    <TextElement as='h3' type='habits_WORD'>beneficios,</TextElement>
                </div>

                <div className='flex flex-row gap-3 items-end'>
                    <TextElement as='h3' type='habits_TUS'>Tu</TextElement>
                    <TextElement as='h3' type='habits_WORD'>impacto</TextElement>
                </div>

            <Button title='Empieza el cambio' color='secondary' className='text-base leadin-6 font-medium text-gray-900 hover:bg-yellow-500 my-6 h-[40px] w-[161px] rounded-lg' href='/auth' />

            </div>

            <div className='flex flex-row content-center justify-center items-center select-none me-[500px]'>

                <img draggable="false" src={C2} alt="Forest" className='select-none absolute top-16 ms-[480px]' />

                <img draggable="false" src={C1} alt="Leave your footprints" className='select-none absolute bottom-16' />

            </div>

            
        </div>
        
    
    </section>


  )

}

export default Habits