import { CouponItem } from '@/components'
import GET_COUPONS from '@/graphql/coupons/getAll.query'
import { useQuery } from '@apollo/client'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import CouponCard from './Coupon'

const Benefits = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const eventsPerPage = 9
  const { data, error } = useQuery(GET_COUPONS)
  console.log(data, error)

  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected)
  }

  const startIndex = currentPage * eventsPerPage
  const endIndex = startIndex + eventsPerPage
  const couponsToShow = data?.coupons?.slice(startIndex, endIndex)
  return (
    <div className='flex flex-col gap-6'>
      <h1>Usa los siguientes cupones como beneficio por tu labor.</h1>
      <h1>El codigo mostrado se puede usar en el respectivo checkout de la marca patrocinante.</h1>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {Array.isArray(data?.coupons) &&
          couponsToShow?.map((coupon: any) => (
            <CouponItem coupon={coupon} key={coupon?.id} />
          ))}
      </div>
      <CouponCard description='ref.earthpoints.2023' thumbnail='https://static.vecteezy.com/system/resources/previews/019/766/237/non_2x/adidas-logo-adidas-icon-transparent-free-png.png' title='15% OFF Adidas (TiendaOnline)' />
      <CouponCard description='kfc.retiroentienda.earthpoints' thumbnail='https://upload.wikimedia.org/wikipedia/commons/b/b8/KFC_logo.png' title='30% OFF KFC (Restaurantes)' />
      <CouponCard description='UNDER-ARMOUR_ECO_FRIENDLY_LATAM' thumbnail='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYQkhB2cOF8hKFl_isq9EF4ksexB91TAb0Q&usqp=CAU' title='30% OFF Ropa deportiva (Solo Presencial)' />
      <CouponCard description='FALABELLA_INICIATIVA_ECOLOGICA' thumbnail='https://seeklogo.com/images/F/falabella-logo-2F240D7A62-seeklogo.com.png' title='25% OFF Ropa Mujeres (Solo Presencial)' />
      <CouponCard description='dunkin-ecologico-2023' thumbnail='https://i.pinimg.com/originals/d7/2d/b2/d72db2928a9b9792c0c5275032796e31.jpg' title='40% OFF Dunkin (Via App)' />
      <CouponCard description='LENOVO_EARTH_LATAM' thumbnail='https://static.vecteezy.com/system/resources/previews/022/100/954/original/lenovo-logo-transparent-free-png.png' title='15% OFF Tablets (Sitio Web)' />
      <ReactPaginate
        pageCount={Math.ceil(data?.coupons?.length / eventsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName='flex gap-2 justify-center items-center'
        activeClassName='font-semibold'
        disabledClassName='opacity-50 cursor-not-allowed'
      />
    </div>
  )
}

export default Benefits
