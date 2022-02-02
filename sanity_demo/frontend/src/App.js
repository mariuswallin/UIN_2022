import { getEvent, getEvents } from './utils/eventService'

function App() {
  const getEventsData = async () => {
    const events = await getEvents()
    console.log(events)
  }

  const getEventData = async () => {
    const slug = 'event-1'
    const event = await getEvent(slug)
    console.log(event)
  }

  return (
    <main>
      <button type="button" onClick={getEventsData}>
        Hent data
      </button>
      <button type="button" onClick={getEventData}>
        Hent data om et event
      </button>
    </main>
  )
}

export default App
