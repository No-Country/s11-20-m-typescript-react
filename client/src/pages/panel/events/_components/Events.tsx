import { EventItem } from '@/components'
import GET_EVENTS from '@/graphql/events/getAll.query'
import { useQuery } from '@apollo/client'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Events = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const eventsPerPage = 9
  const { data, error } = useQuery(GET_EVENTS)
  console.log(data, error)

  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected)
  }

  const startIndex = currentPage * eventsPerPage
  const endIndex = startIndex + eventsPerPage
  const eventsToShow = data?.events?.slice(startIndex, endIndex)
  return (
    <div className='flex flex-col gap-6'>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {Array.isArray(data?.events) &&
          eventsToShow?.map((event: any) => (
            <EventItem event={event} key={event?.id} />
          ))}
      </div>
      <ReactPaginate
        pageCount={Math.ceil(data?.events?.length / eventsPerPage)}
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

export default Events