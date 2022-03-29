import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getActors } from '../lib/services/movieService'

export default function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    const listMoviesByActor = async () => {
      const data = await getActors()
      setActors(data)
    }
    listMoviesByActor()
  }, [])

  return (
    <>
      <h1 className="mb-4 text-xl font-bold">Skuespillere</h1>
      <section className="mt-4">
        {actors?.map((actor) => (
          <article
            className="mt-2 rounded-sm border border-slate-100 px-4 py-2"
            key={actor._id}
          >
            <h2>{actor.fullName}</h2>
            <Link
              className="mt-4 block underline"
              to={`/actors/${actor?.name}`}
            >
              Se alle filmer av {actor?.fullName}
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}
