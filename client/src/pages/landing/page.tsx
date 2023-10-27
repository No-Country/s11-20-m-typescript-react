import { Header, Footer } from '@/components'
import Hero from '@/pages/landing/_components/Hero'
import Info from '@/pages/landing/_components/Info'
import Habits from '@/pages/landing/_components/Habits'
import Solutions from '@/pages/landing/_components/Solutions'

const Landing = () => (
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

export default Landing
