import { TextElement } from '@/components'
import pfp from '@/assets/pfp.png'

const Profile = () => (
  <section className='w-[161px] h-[672px] bg-white rounded-lg px-3 py-3 flex flex-col items-center'>
    <TextElement
      as='h3'
      type='t1'
      className='text-xl leading-7 font-semibold text-gray-900'
    >
      Perfil
    </TextElement>
    <div className='flex flex-col py-4'>
      <img src={pfp} className='mb-4' />
      <TextElement
        as='h3'
        type='t1'
        className='text-lg leading-7 font-normal text-teal-700 my-1'
      >
        Sara Martins
      </TextElement>
      <TextElement
        as='h3'
        type='t1'
        className='text-xs leading-4 font-normal text-gray-500'
      >
        email@usuario.com
      </TextElement>
    </div>
  </section>
)

export default Profile
