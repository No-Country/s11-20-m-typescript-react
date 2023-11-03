import { TextElement } from '@/components'
import arrowright from '@/assets/botones/arrow-right.png'
import calendario from '@/assets/botones/calendario.png'
import schedule from '@/assets/botones/schedule.png'
const MyEvents = () => (
  <section className='w-[346px] h-[220px] bg-white rounded-lg px-3 py-2 flex flex-col justify-around'>
    <div className='flex flex-row justify-between items-center'>
      <TextElement
        as='h3'
        type='t1'
        className='text-xl leading-7 font-semibold text-gray-900'
      >
        Mis eventos
      </TextElement>
      <div className='flex flex-row h-3 items-center gap-2'>
        <TextElement
          as='h3'
          type='t1'
          className='text-xs leading-4 font-normal text-gray-900'
        >
          Ver todos
        </TextElement>
        <img src={arrowright} alt='Arrow Icon' width='13px' height='13px' />
      </div>

    </div>
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row justify-around'>
        <TextElement
          as='h3'
          type='t1'
          className='text-sm leading-5 font-normal text-gray-900'
        >
          Limpieza playa
        </TextElement>
        <img src={calendario} alt='Icono Calendario' />
        <TextElement
          as='h3'
          type='t1'
          className='text-sm leading-5 font-normal text-gray-900'
        >
          29 Oct, 23
        </TextElement>
        <img src={schedule} alt='Icono Calendario' height='16px' width='16px' />
        <TextElement
          as='h3'
          type='t1'
          className='text-sm leading-5 font-normal text-gray-900'
        >
          09:00 Hs.
        </TextElement>
      </div>
      <hr />
    </div>
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row justify-around'>
        <TextElement
          as='h3'
          type='t1'
          className='text-sm leading-5 font-normal text-gray-900'
        >
          Barrido de la calle
        </TextElement>
        <img src={calendario} alt='Icono Calendario' />
        <TextElement
          as='h3'
          type='t1'
          className='text-sm leading-5 font-normal text-gray-900'
        >
          12 Nov, 23
        </TextElement>
        <img src={schedule} alt='Icono Calendario' />
        <TextElement
          as='h3'
          type='t1'
          className='text-sm leading-5 font-normal text-gray-900'
        >
          16:00 Hs.
        </TextElement>
      </div>
      <hr />
    </div>
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row justify-start ps-1'>
        <TextElement
          as='h3'
          type='t1'
          className='text-sm leading-5 font-normal text-gray-900'
        >
          No tienes eventos
        </TextElement>
      </div>
      <hr />
    </div>

  </section>
)

export default MyEvents
