import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getEvents } from '../lib/services/eventService'

function Container({ children }) {
  return <section className="mx-auto w-full max-w-6xl px-6">{children}</section>
}

function Title({ title }) {
  return <h1 className="text-4xl font-extrabold">{title}</h1>
}

function EventList({ events }) {
  return (
    <section className="grid grid-cols-4 gap-4 mt-5">
      {events.map((event) => (
        <article
          key={event.slug}
          className="shadow-md shadow-slate-200 px-6 py-4"
        >
          <h2 className="font-lg font-extrabold mb-2 text-gray-700">Event</h2>
          <p className="font-base font-light">Lorem Ipsum</p>
          <Link to="event" className="text-green-600 underline">
            Til event
          </Link>
        </article>
      ))}
    </section>
  )
}

export default function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const getEventsData = async () => {
      const data = await getEvents()
      setEvents(data)
    }
    getEventsData()
  }, [])

  return (
    <Container>
      <Title title="Events" />
      <EventList events={events} />
    </Container>
  )
}
