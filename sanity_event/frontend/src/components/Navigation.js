import { NavLink } from 'react-router-dom'

function Navigation() {
  const defaultStyle = 'block text-gray-700 text-base font-bold py-1 list-none'
  const link = ({ isActive }) =>
    isActive ? `${defaultStyle} text-green-500` : `${defaultStyle}`

  return (
    <header className="bg-white border mb-16 w-full px-6">
      <nav className="w-full">
        <ul className="flex gap-2">
          <li>
            <NavLink className={link} to="/hjem">
              Hjem
            </NavLink>
          </li>
          <li>
            <NavLink className={link} to="/events">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink className={link} to="/kontakt">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
