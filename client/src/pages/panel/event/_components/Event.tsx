import { Button } from '@nextui-org/react'
import React from 'react'
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
  <div className='bg-white shadow-md p-4 rounded-lg'>
    <img src={thumbnail} alt={title} className='w-full h-48 object-cover' />
    <h2 className='text-2xl font-bold mt-2'>{title}</h2>
    <p className='text-gray-500 text-sm mt-1'>{description}</p>
    <p className='text-gray-700 text-sm mt-1'>
      Start Date: {new Date(startDate).toLocaleDateString()}
    </p>
    <p className='text-gray-700 text-sm mt-1'>
      End Date: {new Date(endDate).toLocaleDateString()}
    </p>
    <Link to='/events' />
    <Button color='primary' size='sm'>Anotarme</Button>

  </div>
)

export default EventCard
