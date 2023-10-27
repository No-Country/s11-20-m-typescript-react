import { Header, Footer, TextElement } from '@/components'
import { Link } from 'react-router-dom'

const PrivacyPage = () => (
  <main className='flex flex-col'>
    <section className="h-[675px] bg-cover bg-no-repeat bg-center bg-[url('/src/assets/background.png')] overflow-hidden">
      <Header />
    </section>

    <div className='flex flex-col justify-center items-center pt-8 gap-7'>
      <TextElement as='h1' type='t1'>
        Politica de privacidad
      </TextElement>
      <TextElement as='h1' type='t2'>
        Última actualización: 02 de Noviembre de 2023.
      </TextElement>

      <TextElement as='h1' type='t3'>
        1. Introducción
      </TextElement>
      <TextElement as='h1' type='base'>
        En EarthPoints la privacidad de nuestros usuarios es de suma
        importancia. Esta política de privacidad describe cómo recopilamos,
        utilizamos, compartimos y protegemos su información personal.
      </TextElement>

      <TextElement as='h1' type='base'>
        Al utilizar EarthPoints, usted implicitamente acepta los términos y
        condiciones de esta política de privacidad.
      </TextElement>

      <TextElement as='h1' type='t3'>
        2. Información que Recopilamos
      </TextElement>
      <TextElement as='h1' type='base'>
        Información Personal: Podemos recopilar información personal como su
        nombre, dirección de correo electrónico, dirección postal, número de
        teléfono, entre otros, cuando usted se registra o interactúa con nuestra
        página web.
      </TextElement>
      <TextElement as='h1' type='base'>
        Información No Personal: También podemos recopilar información no
        personal, como datos demográficos, preferencias de navegación y patrones
        de uso de la página web.
      </TextElement>

      <TextElement as='h1' type='t3'>
        3. Uso de la Información Recopilada
      </TextElement>
      <TextElement as='h1' type='t3'>
        Utilizamos la información recopilada para los siguientes fines:.
      </TextElement>
      <TextElement as='h1' type='base'>
        Proporcionar y mejorar nuestros servicios.
      </TextElement>
      <TextElement as='h1' type='base'>
        Personalizar su experiencia en EarthPoints
      </TextElement>
      <TextElement as='h1' type='base'>
        Enviarle actualizaciones y comunicaciones relacionadas con nuestros
        servicios.
      </TextElement>
      <TextElement as='h1' type='base'>
        Responder a sus preguntas y solicitudes.
      </TextElement>
      <TextElement as='h1' type='base'>
        Cumplir con las leyes y regulaciones aplicables.
      </TextElement>

      <TextElement as='h1' type='t3'>
        4. Divulgación de la Información
      </TextElement>
      <TextElement as='h1' type='base'>
        No compartiremos su información personal con terceros.
      </TextElement>

      <TextElement as='h1' type='t3'>
        5. Enlaces a Terceros
      </TextElement>
      <TextElement as='h1' type='base'>
        Nuestra página web puede contener enlaces a sitios web de terceros. No
        tenemos control sobre sus políticas de privacidad, por lo que le
        recomendamos revisar sus políticas antes de proporcionar información
        personal.
      </TextElement>

      <TextElement as='h1' type='t3'>
        6. Seguridad de la Información
      </TextElement>
      <TextElement as='h1' type='base'>
        Tomamos medidas razonables para proteger la información recopilada, pero
        no podemos garantizar la seguridad completa. Usted es responsable de
        mantener la confidencialidad de su información de inicio de sesión.
      </TextElement>

      <Link
        draggable='false'
        className='text-lg decoration-inherit font-extrabold hover:text-green-300'
        to='/'
      >
        {' '}
        Volver al Home
      </Link>
    </div>

    <Footer />
  </main>
)

export default PrivacyPage
