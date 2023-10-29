import { PanelLayout } from '@/pages'
import { useParams } from 'react-router'
import { useQuery } from '@apollo/client'
import GET_EVENT from '@/graphql/events/getEventById.query'
import EventCard from './_components/Event'

const EventPage = () => {
  const { id } = useParams()
  if (!id) {
    return <span>El parámetro 'id' está ausente o no es válido.</span>
  }

  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { eventId: id }
  })
  console.log(data.event)
  if (loading) return <h1>is loading</h1>
  if (error) console.log(error)
  return (
    <PanelLayout title='Event'>
      <EventCard {...data.event} />
    </PanelLayout>
  )
}
export default EventPage
