import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
      <nav>
        <a href="#" id="logo">
          Logo
        </a>
        <ul>
          <li>
            <NavLink to="hjem">Hjem</NavLink>
          </li>
          <li>
            <NavLink to="produkter">Produkter</NavLink>
          </li>
          <li>
            <a href="#">Tjenester</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
