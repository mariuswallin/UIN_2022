// Importerer HistoryItem da vi bruker denne komponenten her
import HistoryItem from './HistoryItem'

// Tar i mot history som prop som er en liste med objekter
// Må huske stor forbokstav i komponent
// Må huske export default
export default function History({ history }) {
  return (
    <div id="history">
      <h3 className="font-semibold text-xl text-gray-600">Recently played</h3>
      <ul className="list-style-none">
        {/* Bruker map for å gå igjennom history og sender verdiene fra objektet videre */}
        {history?.map((podcast) => (
          <HistoryItem
            key={podcast.id}
            order={podcast.order}
            title={podcast.title}
            duration={podcast.duration}
            author={podcast.author}
          />
        ))}
      </ul>
    </div>
  )
}
