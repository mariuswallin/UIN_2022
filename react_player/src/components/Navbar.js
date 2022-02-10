// Tar inn title som prop så vi får en dynamisk Navbar
// Må huske stor forbokstav i komponent
// Må huske export default
export default function Navbar({ title }) {
  return (
    <nav>
      <ul className="flex justify-between items-center list-style-none">
        <li>
          <img alt="arrow" className="icon-small" src="/arrow.svg" />
        </li>
        <li className="text-gray-600 text-xl font-semibold">{title}</li>
        <li>
          <img alt="dots" className="icon" src="/dots.svg" />
        </li>
      </ul>
    </nav>
  )
}
