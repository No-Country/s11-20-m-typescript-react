import React from 'react'
import { Button, Card } from '@nextui-org/react'
import { Link } from 'react-router-dom'

interface EventCardProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  thumbnail: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  startDate,
  endDate,
  thumbnail
}) => (
  <Card>

    <div className='bg-white shadow-md p-4 rounded-lg flex'>
      <div className='w-1/3 mr-4 flex items-end'>
        <img
          src={thumbnail}
          alt={title}
          className='object-cover object-center w-full h-48 rounded-lg'
        />
      </div>
      <div className='w-2/3'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-gray-600 text-sm mt-1'>{description}</p>
        <p className='text-gray-700 text-sm mt-1'>
          <strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}
        </p>
        <p className='text-gray-700 text-sm mt-1'>
          <strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}
        </p>
        <div className='absolute right-5 bottom-2'>
          <Link to='/events' className='block'>
            <Button color='secondary' size='sm' className='text-black font-light w-20'>
              Anotarme
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </Card>
)

export default EventCard
