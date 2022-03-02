import Pokemon from './Pokemon'

export default function Pokemons({ pokemons }) {
  return (
    <section>
      <h1>Liste med pokemons</h1>
      <ul>
        {pokemons?.map((pokemon) => (
          <li key={pokemon.name}>
            <Pokemon url={pokemon.url} name={pokemon.name} />
          </li>
        ))}
      </ul>
    </section>
  )
}
