import { Button, TextElement } from '@/components'

const Hero = () => (
  <article className='flex flex-row justify-end'>
    <div className='flex flex-col items-start gap-5 my-[96px] mx-[96px]'>
      <div className='flex flex-col items-center md:items-start'>
        <TextElement
          as='h1'
          type='t2'
          className='text-3xl leading-9 font-bold text-white'
        >
          Suma todos los puntos
        </TextElement>

        <TextElement
          as='h1'
          type='t2'
          className='text-3xl leading-9 font-bold text-white'
        >
          posibles mientras incorporas
        </TextElement>

        <TextElement
          as='h1'
          type='t2'
          className='text-3xl leading-9 font-bold text-white'
        >
          hábitos sustentables
        </TextElement>
      </div>

      <div className='flex flex-col items-center md:items-start'>
        <TextElement
          as='h1'
          type='t1'
          className='text-2xl leading-8 font-medium text-white'
        >
          La mejor manera de ayudar al medio ambiente
        </TextElement>

        <Button
          title='Empezar'
          color='secondary'
          className='text-black px-12 hover:bg-yellow-500 mt-4'
          size='sm'
          href='/auth'
        />

      </div>

    </div>

  </article>
)

export default Hero
