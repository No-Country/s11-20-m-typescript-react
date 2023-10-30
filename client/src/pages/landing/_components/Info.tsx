import { TextElement } from '@/components'

const Info = () => (
  <section className='flex flex-col mt-8 me-[96px] w-auto'>
    <div className='bg-gray-200 w-[204px] h-[32px] flex flex-row justify-end items-center pe-3 mb-3 select-none'>
      <TextElement
        as='span'
        type='t1'
        className='text-sm leading-5 font-normal text-teal-800'
      >
        Cómo funciona
      </TextElement>
    </div>

    <div className='flex flex-col bg-white ms-[96px]'>
      <div className='flex flex-row py-3'>
        <TextElement
          as='h1'
          type='t1'
          className='text-xl leading-7 font-semibold text-teal-800'
        >
          Incentiva tus hábitos a través de la acumulación de puntos
        </TextElement>
      </div>

      <div className='flex flex-col md:flex-row gap-1 md:gap-10 pt-3 justify-center'>
        <div className='flex flex-col'>
          <div className='flex flex-row gap-4 items-center justify-start'>
            <TextElement
              as='span'
              type='t1'
              className='text-3xl leading-9 font-semibold text-teal-800'
            >
              1
            </TextElement>
            <TextElement
              as='h2'
              type='t1'
              className='text-lg leading-7 font-medium text-gray-900'
            >
              Registro y nivelación
            </TextElement>
          </div>

          <div className='flex flex-col h-[160px] w-[254px] my-3'>
            <TextElement
              as='span'
              type='t1'
              className='text-sm leading-5 font-normal text-gray-900'
            >
              Regístrate a la plataforma y completa el test para que te
              rankiemos el nivel de sustentabilidad y la conciencia que tienes
              sobre tus hábitos.
            </TextElement>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-row gap-4 items-center justify-start'>
            <TextElement
              as='span'
              type='t1'
              className='text-3xl leading-9 font-semibold text-teal-800'
            >
              2
            </TextElement>
            <TextElement
              as='h2'
              type='t1'
              className='text-lg leading-7 font-medium text-gray-900'
            >
              Adquiere nuevos hábitos
            </TextElement>
          </div>

          <div className='flex flex-col h-[160px] w-[254px] my-3'>
            <TextElement
              as='span'
              type='t1'
              className='text-sm leading-5 font-normal text-gray-900'
            >
              Responde las preguntas diarias para comprobar como vas adquiriendo
              nuevos hábitos mientas sumas puntos.
            </TextElement>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-row gap-4 items-center justify-start'>
            <TextElement
              as='span'
              type='t1'
              className='text-3xl leading-9 font-semibold text-teal-800'
            >
              3
            </TextElement>
            <TextElement
              as='h2'
              type='t1'
              className='text-lg leading-7 font-medium text-gray-900'
            >
              Has participar al resto
            </TextElement>
          </div>

          <div className='flex flex-col h-[160px] w-[254px] my-3'>
            <TextElement
              as='span'
              type='t1'
              className='text-sm leading-5 font-normal text-gray-900'
            >
              Gane puntos participando o creando actividades grupales y
              multiplica tus puntos mientras generas un impacto mayor en el
              medio ambiente.
            </TextElement>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-row gap-4 items-center justify-start'>
            <TextElement
              as='span'
              type='t1'
              className='text-3xl leading-9 font-semibold text-teal-800'
            >
              4
            </TextElement>
            <TextElement
              as='h2'
              type='t1'
              className='text-lg leading-7 font-medium text-gray-900'
            >
              Disfruta de tus logros
            </TextElement>
          </div>

          <div className='flex flex-col h-[160px] w-[254px] my-3'>
            <TextElement
              as='span'
              type='t1'
              className='text-sm leading-5 font-normal text-gray-900'
            >
              Los miembros pueden usar sus puntos EarthPoints para obtener
              grandes descuentos en empresas locales y descuentos exclusivos en
              productos sostenibles.
            </TextElement>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Info
