// Tar i mot 4 props som props
// Må huske stor forbokstav i komponent
// Må huske export default
export default function HistoryItem({ order, title, author, duration }) {
  return (
    <li className="flex items-center">
      <div />
      <div className="flex items-center">
        <p>
          <span className="font-semibold text-lg">
            #{order} - {title}
          </span>
          <span className="text-sm text-gray-500">
            By {author} - {duration}
          </span>
        </p>
        <button type="button">
          <img alt="play" className="icon" src="/play.svg" />
        </button>
      </div>
    </li>
  )
}
