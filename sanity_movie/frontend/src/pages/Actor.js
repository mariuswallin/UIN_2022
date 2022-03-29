import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ActorItem from '../components/ActorItem'
import { getMoviesByActor } from '../lib/services/movieService'

export default function Actor() {
  const [content, setContent] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const listMoviesByActor = async () => {
      const data = await getMoviesByActor(name)
      setContent(data)
    }
    listMoviesByActor()
  }, [name])

  return (
    <>
      <h1 className="mb-4 text-xl font-bold">
        Filmer av {content?.[0]?.actor?.fullName}
      </h1>
      <section className="mt-4">
        {content?.map((movie) => (
          <ActorItem
            key={movie?._id}
            title={movie?.title}
            actor={movie?.actor}
          />
        ))}
        <Link className="mt-4 block underline" to="/movies">
          Tilbake til alle filmer
        </Link>
      </section>
    </>
  )
}
