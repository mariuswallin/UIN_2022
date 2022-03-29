import { useEffect, useState } from 'react'
import Movie from '../components/Movie'
import { getMovies } from '../lib/services/movieService'

export default function Movies() {
  const [content, setContent] = useState([])

  useEffect(() => {
    const listMovies = async () => {
      const data = await getMovies()
      setContent(data)
    }
    listMovies()
  }, [])

  return (
    <>
      <h1 className="mb-4 text-xl font-bold">Filmer</h1>
      <section className="mt-4">
        {content?.map((movie) => (
          <Movie key={movie?._id} title={movie?.title} actor={movie?.actor} />
        ))}
      </section>
    </>
  )
}
