import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Title from '../components/Title'
import { getEvents } from '../lib/services/eventService'

function EventList({ events }) {
  return (
    <section className="grid grid-cols-4 gap-4 mt-5">
      {events?.map((event) => (
        <article
          key={event.slug}
          className="shadow-md shadow-slate-200 px-6 py-4"
        >
          <h2 className="font-lg font-extrabold mb-2 text-gray-700">
            {event.title}
          </h2>
          <p className="font-base font-light">{event.preAmble}</p>
          <Link to={event.slug} className="text-green-600 underline">
            {event.slug}
          </Link>
        </article>
      ))}
    </section>
  )
}

export default function Events() {
  const [events, setEvents] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setError(null)
    const getEventsData = async () => {
      // Indikerer at vi henter data
      setLoading(true)
      try {
        // Henter data
        const data = await getEvents()
        // Lagrer data til events
        setEvents(data)
      } catch (error) {
        // Lagrer error
        setError(error)
      } finally {
        // Loading resettes
        setLoading(false)
      }
    }
    getEventsData()
  }, [])

  // Viser innholdet under basert på om vi får feil eller henter data
  if (!events && error) return <div>Noe gikk galt ...</div>
  if (!events && loading) return <div>Henter data ... </div>

  // Hvis vi ikke henter data eller får feil vises selve innholdet
  return (
    <Container>
      <Title title="Events" />
      <EventList events={events} />
    </Container>
  )
}
