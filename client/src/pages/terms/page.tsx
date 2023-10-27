import { Header, Footer } from "@/components";
import { TextElement } from '@/components';
import { Link } from "react-router-dom";

function TermsPage () {

  return (
    
    <main className='flex flex-col'>

        <section className="h-[675px] bg-cover bg-no-repeat bg-center bg-[url('/src/assets/background.png')] overflow-hidden">
            <Header />
        </section>

        <div className="flex flex-col justify-center items-center pt-8 gap-7">

            <TextElement as='h1' type='t1'>Terminos y condiciones</TextElement>
            <TextElement as='h1' type='t2'>Última actualización: 02 de Noviembre de 2023.</TextElement>

            <TextElement as='h1' type='t3'>1. Privacidad</TextElement>
            <TextElement as='h1' type='base'>Nuestra Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal de los usuarios. Al utilizar este sitio, acepta nuestras prácticas de privacidad.</TextElement>

            <TextElement as='h1' type='t3'>2. Limitación de Responsabilidad</TextElement>
            <TextElement as='h1' type='base'>Este sitio web se proporciona "tal cual" y no hacemos ninguna garantía de que esté libre de errores o interrupciones. No seremos responsables por daños directos, indirectos, incidentales o consecuentes resultantes del uso de este sitio.</TextElement>

            <TextElement as='h1' type='t3'>3. Jurisdicción y Ley Aplicable</TextElement>
            <TextElement as='h1' type='base'>Estos Términos y Condiciones se rigen por las leyes del país o estado correspondiente donde se utiliza. Cualquier disputa relacionada con este sitio web estará sujeta a la jurisdicción exclusiva de los tribunales correspondientes.</TextElement>

            <TextElement as='h1' type='t3'>4. Contacto</TextElement>
            <TextElement as='h1' type='base'>Si tiene preguntas o comentarios sobre estos Términos y Condiciones, puede ponerse en contacto con nosotros <a className="hover:text-blue-400 hover:font-bold hover:underline" href="mailto:s11.nocountry@gmail.com">por medio de correo electronico.</a></TextElement>

            <Link draggable='false' className="text-lg decoration-inherit font-extrabold hover:text-green-300" to='/' > Volver al Home</Link>

        </div>

        <Footer />

    </main>

  )

}

export default TermsPage