import React from 'react'
import { Button, Card } from '@nextui-org/react'

interface CouponCardProps {
  title: string;
  description: string;
  thumbnail: string;
}

const CouponCard: React.FC<CouponCardProps> = ({
  title,
  description,
  thumbnail
}) => (
  <Card>

    <div className='bg-white shadow-md p-4 rounded-lg flex'>
      <div className='w-1/6 mr-4 flex items-end'>
        <img
          draggable='false'
          src={thumbnail}
          alt={title}
          className='object-cover object-center w-full h-48 rounded-lg select-none'
        />
      </div>
      <div className='w-2/3'>
        <p className='text-gray-700 text-sm mt-1 select-none'>
          <strong>Cupon:{title}</strong>
        </p>
        <p className='text-gray-700 text-sm mt-1 select-none'>
          <strong>Beneficio:</strong>
        </p>
        <p className='text-gray-600 text-sm mt-1 select-none'>{description}</p>
        <div className='absolute right-5 bottom-2'>

          <Button onClick={() => { navigator.clipboard.writeText(description); alert('Cupon copiado a portapapeles! Gracias por usar EarthPoints') }} color='secondary' size='sm' className='text-black font-light w-20 hover:bg-green-600'>
            Obtener
          </Button>

        </div>
      </div>
    </div>
  </Card>
)

export default CouponCard
