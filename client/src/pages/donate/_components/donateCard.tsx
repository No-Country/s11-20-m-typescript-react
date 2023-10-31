import donationIcon from '@/assets/donation_icon.jpg'
import { Button } from '@/components'
import useDonate from '../useDonate'
import { createSession } from '@/services/donations/createSession.service'

interface Props {
  price: number
}

export const DonateCard = ({ price }: Props) => {
  const { currencyFormatter, parsePrice } = useDonate()

  const handleClick = async () => {
    const priceParsed = parsePrice(price)
    const session = await createSession(priceParsed)
    if (!session.url) return
    window.location.href = session.url
  }

  return (
    <>
      <div className='bg-white p-2 shadow-lg hover:scale-105 rounded-2xl overflow-hidden'>
        <div>
          <img
            src={donationIcon}
            className='w-40 h-36 object-cover rounded-2xl'
          />
        </div>
        <div>
          <Button
            title={currencyFormatter(price)}
            onClick={handleClick}
            className='h-10 w-full'
          />
        </div>
      </div>
    </>
  )
}
