import { TextElement,  } from '@/components';

function Info () {

  return (

    <section className="flex flex-col mt-8 me-[96px] w-auto">
        
        <div className="bg-gray-200 w-[204px] h-[32px] flex flex-row justify-end items-center pe-3 mb-3 select-none">
            <TextElement as='span' type='info_CF'>Cómo funciona</TextElement>
        </div>

        <div className='flex flex-col bg-white ms-[96px] ' >

            <div className='flex flex-row py-3'>
                <TextElement as='h1' type='info_IN'>Incentiva tus hábitos a través de la acumulación de puntos</TextElement>
            </div>

            <div className='flex flex-row gap-10 pt-3 justify-center'>

                <div className='flex flex-col' >

                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <TextElement as='span' type='info_NUMBER'>1</TextElement>
                        <TextElement as='h2' type='info_TITLE'>Registro y nivelación</TextElement>
                    </div>

                    <div className='flex flex-col h-[160px] w-[254px] my-3'>
                        <TextElement as='span' type='info_SUBTITLE'>Regístrate a la plataforma y completa el test para que te rankiemos el nivel de sustentabilidad y la conciencia que tienes sobre tus hábitos.</TextElement>
                    </div>

                </div>

                <div className='flex flex-col' >

                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <TextElement as='span' type='info_NUMBER'>2</TextElement>
                        <TextElement as='h2' type='info_TITLE'>Adquiere nuevos hábitos</TextElement>
                    </div>

                    <div className='flex flex-col h-[160px] w-[254px] my-3'>
                        <TextElement as='span' type='info_SUBTITLE'>Responde las preguntas diarias para comprobar como vas adquiriendo nuevos hábitos mientas sumas puntos.</TextElement>
                    </div>

                </div>

                <div className='flex flex-col' >

                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <TextElement as='span' type='info_NUMBER'>3</TextElement>
                        <TextElement as='h2' type='info_TITLE'>Has participar al resto</TextElement>
                    </div>

                    <div className='flex flex-col h-[160px] w-[254px] my-3'>
                        <TextElement as='span' type='info_SUBTITLE'>Gane puntos participando o creando actividades grupales y multiplica tus puntos mientras generas un impacto mayor en el medio ambiente.</TextElement>
                    </div>

                </div>

                <div className='flex flex-col' >

                    <div className='flex flex-row gap-4 items-center justify-start'>
                        <TextElement as='span' type='info_NUMBER'>4</TextElement>
                        <TextElement as='h2' type='info_TITLE'>Disfruta de tus logros</TextElement>
                    </div>

                    <div className='flex flex-col h-[160px] w-[254px] my-3'>
                        <TextElement as='span' type='info_SUBTITLE'>Los miembros pueden usar sus puntos EarthPoints para obtener grandes descuentos en empresas locales y descuentos exclusivos en productos sostenibles.</TextElement>
                    </div>

                </div>

            </div>





        </div>
    
    </section>


  )

}

export default Info