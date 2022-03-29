import client from '../client'

const movieFields = `
  _id,
  title,
  "actor": actor->{fullName, "name": name.current}
`

const actorFields = `
  _id,
  fullName,
  "name": name.current
`

export async function getMovies() {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  return data
}

export async function getActors() {
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`)
  return data
}

export async function getMoviesByActor(actor) {
  const data = await client.fetch(
    `*[_type == "movie" && actor->name.current==$actor]{${movieFields}}`,
    { actor }
  )
  return data
}
