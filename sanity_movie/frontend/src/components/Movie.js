import { Link } from 'react-router-dom'

export default function Movie({ title, actor }) {
  return (
    <article className="mt-2 rounded-sm border border-slate-100 px-4 py-2">
      <h1>Filmtittel - {title}</h1>
      <p>Skuespiller - {actor?.fullName}</p>
      <Link className="mt-4 block underline" to={`/actors/${actor?.name}`}>
        Se alle filmer av {actor?.fullName}
      </Link>
    </article>
  )
}
