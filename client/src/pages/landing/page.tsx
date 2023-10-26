import { Header, Footer  } from '@/components';
import Hero from './Hero';
import Info from './Info';
import Habits from './Habits';
import Solutions from './Solutions';

function Landing () {

  return (

    <main className='flex flex-col'>

        <section className="h-[675px] bg-cover bg-no-repeat bg-center bg-[url('/src/assets/background.png')] overflow-hidden">
            <Header />
            <Hero />
        </section>

        <Info />
        <Habits />
        <Solutions />
        <Footer />

    </main>

  )

}

export default Landing