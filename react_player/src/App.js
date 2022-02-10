// Importerer useState så vi kan bruke den til å holde på endringer i tilstand
import { useState } from 'react'
// Importerer nødvendige komponenter fra components mappen
import Action from './components/Action'
import History from './components/History'
import Navbar from './components/Navbar'
import Podcast from './components/Podcast'
import Screen from './components/Screen'
import Status from './components/Status'

// Statisk liste med podcasts
const podcasts = [
  {
    id: 1,
    title: 'Leaders eat last',
    author: 'Simon Sinek',
    duration: '12.25',
    order: 1,
    genre: 'Business',
  },
  {
    id: 2,
    title: 'Purple Cow',
    author: 'Seth Godin',
    duration: '10.25',
    order: 2,
    genre: 'Marketing',
  },
  {
    id: 3,
    title: 'The design of everyday things',
    author: 'Don Norman',
    duration: '09.25',
    order: 3,
    genre: 'Design',
  },
]

export default function App() {
  // To tilstander vi ønsker å lagre
  // isPlaying er en boolean vi oppdaterer for å vise play eller pause knapp
  // setIsPlaying brukes til å oppdatere isPlaying. Den er en funksjon vi får fra useState
  const [isPlaying, setIsPlaying] = useState(false)

  // current er verdien som holder på hvilken Podcast vi skal vise
  // setCurrent brukes til å oppdatere current. Den er en funksjon vi får fra useState
  // current må bo her da det er flere applikasjoner som må kjenne til verdien
  const [current, setCurrent] = useState(0)

  // Under er diverse funksjoner vi sender til Action og trigges ved klikk på knappene i Action
  const handleBack = () => {
    console.log('CLICKED BACK')
    // Reduserer verdien av "gammel state" (current) med 1
    setCurrent((prev) => prev - 1)
  }

  const handlePlay = () => {
    console.log('PLAY')
    // Setter isPlaying til det motsatte av det den var
    setIsPlaying(!isPlaying)
  }

  const handlePause = () => {
    console.log('PAUSE')
    // Setter isPlaying til det motsatte av det den var
    setIsPlaying(!isPlaying)
  }

  return (
    <main>
      {/* Sender props og verdier til komponenten */}
      <Navbar title="Now playing" />
      <Screen />
      <Podcast podcast={podcasts[current]} />
      <Status duration={podcasts[current]?.duration} />
      {/* Sender props og verdier / funksjoner til komponenten */}
      <Action
        isPlaying={isPlaying}
        setCurrent={setCurrent}
        handleBack={handleBack}
        handlePlay={handlePlay}
        handlePause={handlePause}
      />
      <History history={podcasts} />
    </main>
  )
}
