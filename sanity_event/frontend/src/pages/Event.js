/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import SanityContent from '../components/SanityContent'
import Title from '../components/Title'
import { urlFor } from '../lib/image'
import { getEvent } from '../lib/services/eventService'

export default function Event() {
  const [event, setEvent] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  // Henter slug fra /events/:slug
  const { slug } = useParams()

  useEffect(() => {
    const getEventData = async () => {
      setLoading(true)
      try {
        // Bruker servicen til å hente data med slug som parameter
        const eventData = await getEvent(slug)
        setEvent(eventData)
      } catch (error) {
        console.log(error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getEventData()
  }, [slug])

  if (!event && error) return <div>Noe gikk galt ...</div>
  if (!event && loading) return <div>Henter event ... </div>

  return (
    <Container>
      <p className="mb-4 text-xs">/events/{event?.slug}</p>
      <p className="inline-block bg-slate-900 text-white px-3 py-2 mb-2 text-sm capitalize">
        {event?.category}
      </p>
      <Title title={event?.title} />
      <p className="italic text-sm my-4">{event?.preAmble}</p>
      {/* Bruker urlFor for å få url til bildet */}
      {/* Bruker andre funksjoner som .width for å se noe om bredde og format */}
      {event?.image ? (
        <figure>
          <img
            src={urlFor(event.image).width(800).format('webp').url()}
            alt={event?.image?.alternativeText}
          />
          <figcaption>{event?.image?.caption}</figcaption>
        </figure>
      ) : null}
      {/* Bruker sanity content */}
      <SanityContent data={event?.body} />
    </Container>
  )
}
