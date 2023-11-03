import { TextElement, Button } from '@/components'
import calendar from '@/assets/botones/calendario.png'
import icons from '@/assets/botones/icons.png'
const Greeting = () => (
  <section className='w-[346px] h-[220px] bg-white rounded-lg px-3 py-2 flex flex-col justify-around'>
    <div className='flex flex-row justify-between items-center'>
      <TextElement
        as='h3'
        type='t1'
        className='text-2xl leading-8 font-medium text-gray-900'
      >
        Hola, Sara!
      </TextElement>
      <div className='flex flex-row h-3 items-center gap-2'>
        <TextElement
          as='h3'
          type='t1'
          className='text-xs leading-4 font-normal text-gray-900'
        >
          07 Nov, 2023
        </TextElement>
        <img src={calendar} alt='Calendar Icon' width='13px' height='13px' />
      </div>

    </div>
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row'>
        <TextElement
          as='h3'
          type='t1'
          className='text-sm leading-5 font-normal text-gray-900'
        >
          Este es su resumen semanal
        </TextElement>

      </div>
      <img src={icons} alt='Icons' />
    </div>
    <div className='flex flex-row justify-between items-center'>
      <TextElement
        as='h3'
        type='t1'
        className='text-sm leading-5 font-normal text-gray-900'
      >
        Responde el cuestionario diario
      </TextElement>
      <Button href='/' size='md' title='Quiz diario' color='secondary' className='text-black' />
    </div>

  </section>
)

export default Greeting
