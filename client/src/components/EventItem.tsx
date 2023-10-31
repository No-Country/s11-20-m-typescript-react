import { TextElement } from '@/components'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'

interface EventItemProps {
  event: any
}

const EventItem = ({ event }: EventItemProps) => (
  <div
    key={event?.id}
    className='p-3 bg-white cursor-pointer rounded-3xl flex flex-col gap-2'
  >
    <img
      src={event?.thumbnail}
      alt={event?.title}
      className='object-cover w-full h-[150px] rounded-2xl'
    />
    <div className='gap-2 flex flex-col'>
      <div className='flex flex-col gap-[2px] '>
        <TextElement as='h2' type='t3'>
          {event?.title}
        </TextElement>
        <TextElement as='p' type='small'>
          {event?.location?.state}
        </TextElement>
      </div>

      <Button
        as={Link}
        to={`/events/${event?._id}`}
        // title='Ver evento'
        color='secondary'
        size='sm'
        className='text-black font-light w-[230px] h-[38px]'
        fullWidth
      >
        Unirse
      </Button>
    </div>
  </div>
)

export default EventItem
