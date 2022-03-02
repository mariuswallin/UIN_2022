import { useState } from 'react'
import Pokemons from './components/Pokemons'

// https://pokeapi.co/api/v2/pokemon?limit=25

// const pokemons = [
//   { id: 1, name: 'Bulbasaur' },
//   { id: 2, name: 'Ivysaur' },
// ]

function App() {
  const [pokemons, setPokemons] = useState([])

  const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    const data = await response.json()
    console.log(data.results)
    setPokemons(data.results)
  }

  return (
    <main className="mx-auto mt-6 max-w-sm border-2 p-6">
      <Pokemons pokemons={pokemons} />
      <button type="button" onClick={getPokemons}>
        Hent pokemons
      </button>
    </main>
  )
}

export default App
