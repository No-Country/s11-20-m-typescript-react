import { TextElement, Button } from '@/components'
import location from '@/assets/botones/location.png'
import schedule from '@/assets/botones/schedule.png'
import recommended from '@/assets/recommended.png'

const Recommended = () => (
  <section className='w-[346px] h-100 bg-white rounded-lg px-3 py-3 flex flex-col justify-between'>
    <div className='flex flex-col justify-center'>
      <TextElement
        as='h3'
        type='t1'
        className='text-xl leading-7 font-semibold text-gray-900'
      >
        Eventos recomendados
      </TextElement>
      <div className='flex flex-col justify-center'>
        <img src={recommended} />
      </div>
      <div className='flex flex-col justify-start py-2 gap-2'>
        <TextElement
          as='h3'
          type='t1'
          className='text-lg leading-7 font-normal'
        >
          Titulo del evento
        </TextElement>
        <div className='flex flex-row justify-between'>
          <div className='flex gap-2'>
            <img src={location} alt='Icono Ubicacion' />
            <TextElement
              as='h3'
              type='t1'
              className='text-sm leading-5 font-normal text-gray-900'
            >
              Lugar del evento
            </TextElement>
          </div>
          <div className='flex gap-2'>
            <img src={schedule} alt='Icono Calendario' />
            <TextElement
              as='h3'
              type='t1'
              className='text-sm leading-5 font-normal text-gray-900'
            >
              00:00 Hs.
            </TextElement>
          </div>
        </div>
        <hr />
        <div className='flex flex-row h-[32px] w-[314px]'>
          <TextElement
            as='h3'
            type='t1'
            className='text-xs leading-4 font-normal'
          >
            Breve descripción de lo que vamos a hacer en el evento
          </TextElement>
          <Button href='/' size='md' title='Información' color='secondary' className='text-sm leading-5 text-gray-800 px-1 font-normal' />
        </div>
      </div>

    </div>

  </section>
)

export default Recommended
