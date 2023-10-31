import { Card, CardHeader, CardBody, Image, Button, CardFooter, Divider } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import location from './_icons/location.png'
import schedule from './_icons/schedule.png'
interface EventItemProps {
  event: any
}
const EventCard = ({ event }: EventItemProps) => (

  <Card className='w-[254px] h-[276px] justify-center '>
    <CardBody className='overflow-hidden'>
      <Image
        alt={event?.title}
        src={event?.thumbnail}
        className='object-cover rounded-xl w-[238px] h-[100px] '
      />
    </CardBody>
    <CardHeader className=' flex-col items-start'>
      <h4 className=' uppercase font-bold'>{event?.title}</h4>
      <div className='flex flex-row gap-5 text-sm'>
        <div className='flex flex-row'>
          <img src={location} alt='location' />
          <p>lugar de evento</p>
        </div>
        <div className='flex flex-row'>
          <img src={schedule} alt='schedule' />
          <p>{event?.time}</p>

        </div>
      </div>
      <Divider />
      <span>
        <small className='text-default-500'>{event?.description}</small>
      </span>
    </CardHeader>
    <CardFooter>
      <Button
        as={Link}
        to={`/events/${event?._id}`}
        color='secondary'
        size='sm'
        className='text-black font-light w-[230px] h-[33px]'
      >
        Unirse
      </Button>
    </CardFooter>
  </Card>
)

export default EventCard
