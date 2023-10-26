import { Button, TextElement } from '@/components'
import { toast } from 'sonner'

interface CouponItemProps {
  coupon: any
}

const CouponItem = ({ coupon }: CouponItemProps) => (
  <div
    key={coupon?.id}
    className='p-3 bg-white cursor-pointer rounded-3xl flex flex-col gap-2'
  >
    <img
      src={coupon?.thumbnail}
      alt={coupon?.title}
      className='object-cover w-full h-[150px] rounded-2xl'
    />
    <div className='gap-2 flex flex-col'>
      <div className='flex flex-col gap-[2px] '>
        <TextElement as='h2' type='t3'>
          {coupon?.title}
        </TextElement>
        <TextElement as='p' type='small'>
          {coupon?.usesPerMonth} usos por mes
        </TextElement>
      </div>
      <Button
        title='Obtener'
        color='secondary'
        size='sm'
        className='text-black font-light'
        fullWidth
        onPress={() => toast('Servicio no disponible')}
      />
    </div>
  </div>
)

export default CouponItem
