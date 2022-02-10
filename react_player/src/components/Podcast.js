// Tar inn podcast som prop. Podcast er et objektiv
// Må huske stor forbokstav i komponent
// Må huske export default
export default function Podcast({ podcast }) {
  // Bruker <></> React Fragments da h2 og p er på samme linje
  return (
    <>
      {/* Henter ut order og title fra podcast objektiv */}
      <h2 className="text-center mt-6">
        #{podcast?.order} - {podcast?.title}
      </h2>
      {/* Henter ut genre og author fra podcast objektiv */}
      <p className="text-center text-gray-400 text-sm font-semibold mt-2">
        {podcast?.genre} - By {podcast?.author}
      </p>
    </>
  )
}
