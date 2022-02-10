// Tar i mot en rekke props
// isPlaying er en Boolean som endres når vi trykker på play / pause
// handleX og setCurrent bor i App.js
// setCurrent trigger oppdatering av current når vi trykker på neste / forrige
// handlePlay / handlePause trigger endring av isPlaying
// Må huske stor forbokstav i komponent
// Må huske export default
export default function Action({
  setCurrent,
  handleBack,
  isPlaying,
  handlePlay,
  handlePause,
}) {
  // Øker verdien av "gammel state" (current) med 1
  const handleNext = () => {
    console.log('CLICKED')
    setCurrent((prev) => prev + 1)
  }

  return (
    <div className="flex items-center justify-center" id="actions">
      <button type="button" id="rewind" onClick={handleBack}>
        <img alt="dots" className="icon" src="/rewind.svg" />
      </button>
      {/* Ternary operator som henholdsvis viser pause eller play */}
      {/* Om play eller pause vises trigges av funksjonene handlePause eller handlePlay */}
      {isPlaying ? (
        <button type="button" id="play" onClick={handlePause}>
          <img alt="pause" className="icon" src="/pause.svg" />
        </button>
      ) : (
        <button type="button" id="play" onClick={handlePlay}>
          <img alt="play" className="icon" src="/play.svg" />
        </button>
      )}
      <button type="button" id="forward" onClick={handleNext}>
        <img alt="forward" className="icon" src="/forward.svg" />
      </button>
    </div>
  )
}
