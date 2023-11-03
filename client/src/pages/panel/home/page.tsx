import { PanelLayout } from '@/pages'
import Greeting from './_components/Greeting'
import MyEvents from './_components/MyEvents'
import Discounts from './_components/Discounts'
import Recommended from './_components/Recommended'
import Profile from './_components/Profile'
const Home = () => (
  <PanelLayout title='Home'>
    <section className='flex flex-col gap-5'>
      <div className='flex flex-row gap-5'>
        <div className='flex flex-row'>
          <div className='flex flex-col gap-4 justify-between'>
            <Greeting />
            <MyEvents />
          </div>
        </div>
        <div className='flex'>
          <Recommended />
        </div>
        <div className='flex'>
          <Profile />
        </div>
      </div>
      <div className='flex flex-row'>
        <Discounts />
      </div>

    </section>

  </PanelLayout>
)

export default Home
