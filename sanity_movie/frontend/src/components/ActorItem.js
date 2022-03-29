export default function ActorItem({ title, actor }) {
  return (
    <article className="mt-2 rounded-sm border border-slate-100 px-4 py-2">
      <h1>Filmtittel - {title}</h1>
      <p>Skuespiller - {actor?.fullName}</p>
    </article>
  )
}
