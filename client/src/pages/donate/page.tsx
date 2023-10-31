import { Header } from '@/components'
import { DonateCard } from './_components/donateCard'

const Donate = () => (
  <section className='flex w-full  items-center min-h-screen flex-col bg-[#e5e5e5] '>
    <Header />

    <div className='flex flex-col justify-center h-80 items-center'>
      <h1 className='text-6xl font-bold text-teal-800'>Donaciones</h1>
      <p className='text-xl text-center'>
        Tu donación nos ayuda a seguir con nuestra labor.
      </p>
    </div>

    <div className='flex flex-wrap gap-8 justify-center items-center mb-6'>
      <DonateCard price={5} />
      <DonateCard price={10} />
      <DonateCard price={20} />
    </div>
  </section>
)

export default Donate
