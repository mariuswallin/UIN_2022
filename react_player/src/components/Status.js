// Tar i mot duration som prop så vi får oppdatert duration verdi
// Må huske stor forbokstav i komponent
// Må huske export default
export default function Status({ duration }) {
  return (
    <div
      className="flex mt-4 items-center justify-center w-full text-md"
      id="bar"
    >
      <p className="text-gray-400 font-semibold">4.10</p>
      <div id="slider">
        <div style={{ width: '50%' }} />
        <div style={{ left: '50%' }} />
      </div>
      <p className="text-gray-400 font-semibold">{duration}</p>
    </div>
  )
}
