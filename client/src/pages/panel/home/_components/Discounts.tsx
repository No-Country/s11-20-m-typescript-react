import { TextElement } from '@/components'
import arrowright from '@/assets/botones/arrow-right.png'
import must from '@/assets/must.png'
import ondule from '@/assets/ondule.png'
import enertik from '@/assets/enertik.png'
import liveslow from '@/assets/liveslow.png'

const Discounts = () => (
  <section className='w-[717px] h-[196px] bg-white rounded-lg px-3 py-2 flex flex-col justify-around'>
    <div className='flex flex-row justify-between items-center'>
      <TextElement
        as='h3'
        type='t1'
        className='text-xl leading-7 font-semibold text-gray-900'
      >
        Descuentos
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

    <div className='flex flex-row justify-between items-center'>

      <div className='h-[144px] w-[162px] border rounded-lg '>
        <div className='flex flex-col items-center justify-center'>
          <img src={must} alt='must logo' height='44px' width='44px' />
          <TextElement
            as='h3'
            type='t1'
            className='text-base leading-6 font-medium text-gray-700'
          >
            Must
          </TextElement>
          <TextElement
            as='h3'
            type='t1'
            className='text-xl leading-7 text-gray-900'
          >
            15%
          </TextElement>
          <div className='flex flex-row h-3 items-center gap-2'>
            <TextElement
              as='h3'
              type='t1'
              className='text-xs leading-4 font-normal text-gray-900'
            >
              Conocer más
            </TextElement>
            <img src={arrowright} alt='Arrow Icon' width='13px' height='13px' />
          </div>
        </div>
      </div>

      <div className='h-[144px] w-[162px] border rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <img src={ondule} alt='must logo' height='44px' width='44px' />
          <TextElement
            as='h3'
            type='t1'
            className='text-base leading-6 font-medium text-gray-700'
          >
            Ondule
          </TextElement>
          <TextElement
            as='h3'
            type='t1'
            className='text-xl leading-7 text-gray-900'
          >
            15%
          </TextElement>
          <div className='flex flex-row h-3 items-center gap-2'>
            <TextElement
              as='h3'
              type='t1'
              className='text-xs leading-4 font-normal text-gray-900'
            >
              Conocer más
            </TextElement>
            <img src={arrowright} alt='Arrow Icon' width='13px' height='13px' />
          </div>
        </div>
      </div>

      <div className='h-[144px] w-[162px] border rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <img src={enertik} alt='must logo' height='44px' width='44px' />
          <TextElement
            as='h3'
            type='t1'
            className='text-base leading-6 font-medium text-gray-700'
          >
            Enertik
          </TextElement>
          <TextElement
            as='h3'
            type='t1'
            className='text-xl leading-7 text-gray-900'
          >
            15%
          </TextElement>
          <div className='flex flex-row h-3 items-center gap-2'>
            <TextElement
              as='h3'
              type='t1'
              className='text-xs leading-4 font-normal text-gray-900'
            >
              Conocer más
            </TextElement>
            <img src={arrowright} alt='Arrow Icon' width='13px' height='13px' />
          </div>
        </div>
      </div>

      <div className='h-[144px] w-[162px] border rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <img src={liveslow} alt='must logo' height='44px' width='44px' />
          <TextElement
            as='h3'
            type='t1'
            className='text-base leading-6 font-medium text-gray-700'
          >
            Must
          </TextElement>
          <TextElement
            as='h3'
            type='t1'
            className='text-xl leading-7 text-gray-900'
          >
            15%
          </TextElement>
          <div className='flex flex-row h-3 items-center gap-2'>
            <TextElement
              as='h3'
              type='t1'
              className='text-xs leading-4 font-normal text-gray-900'
            >
              Conocer más
            </TextElement>
            <img src={arrowright} alt='Arrow Icon' width='13px' height='13px' />
          </div>
        </div>
      </div>

    </div>

  </section>
)

export default Discounts
