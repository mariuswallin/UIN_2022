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
