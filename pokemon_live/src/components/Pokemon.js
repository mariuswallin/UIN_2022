import { useState } from 'react'

export default function Pokemon({ url, name }) {
  const [experience, setExperience] = useState(false)

  const getPokemon = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.base_experience)
    setExperience(data.base_experience)
    // setPokemons(data.results)
  }

  return (
    <article>
      <h2>{name}</h2>
      <p>{url}</p>
      {experience ? <p>{experience}</p> : null}
      <button onClick={() => getPokemon(url)} type="button">
        See experience
      </button>
    </article>
  )
}
