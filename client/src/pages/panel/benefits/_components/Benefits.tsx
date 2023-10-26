import { CouponItem } from '@/components'
import GET_COUPONS from '@/graphql/coupons/getAll.query'
import { useQuery } from '@apollo/client'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

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
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {Array.isArray(data?.coupons) &&
          couponsToShow?.map((coupon: any) => (
            <CouponItem coupon={coupon} key={coupon?.id} />
          ))}
      </div>
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
