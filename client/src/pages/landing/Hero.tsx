import { Button, TextElement,  } from '@/components';

function Hero () {

  return (

    <article className='flex flex-row justify-end'>

        <div className='flex flex-col items-start gap-5  my-[96px] mx-[96px]'>

            <div className='flex flex-col items-start'>

                <TextElement as='h1' type='hero_t1'>Suma todos los puntos</TextElement>
                <TextElement as='h1' type='hero_t1'>posibles mientras incorporas</TextElement>
                <TextElement as='h1' type='hero_t1'>hábitos sustentables</TextElement>

            </div>
            
            <div className='flex flex-col items-start'>

                <TextElement as='h1' type='hero_t2'>La mejor manera de ayudar al</TextElement>
                <TextElement as='h1' type='hero_t2'>al medio ambiente</TextElement>

            </div>

            <Button title='Empezar' color='secondary' className='text-black px-12 hover:bg-yellow-500' size='sm' href='/profile' />
        </div>

    </article>

  )

}

export default Hero