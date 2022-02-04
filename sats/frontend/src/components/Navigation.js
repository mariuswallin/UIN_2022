import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

const navItems = [
  {
    name: 'Bli medlem',
    to: '/medlem',
  },
  {
    name: 'Finn treningssenter',
    to: '/finn',
  },
  {
    name: 'Treningstilbud',
    to: '/trening',
  },
]

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.nav.background};
  display: flex;
  align-items: center;
  height: 40px;
`

const StyledLogo = styled.img`
  max-width: 100%;
  padding: 1rem 2rem;
`

const StyledNavUl = styled.ul`
  display: flex;
`

const StyledNavLi = styled.li`
  color: ${({ theme }) => theme.nav.link};
  font-size: 1.2rem;
  & a {
    color: inherit;
    text-decoration: none;
    padding: 1rem;
    &:hover {
      color: #ccc;
    }
    &.active {
      text-decoration: underline;
    }
  }
`

export default function Navigation() {
  const activeLink = ({ isActive }) => (isActive ? 'active' : '')
  return (
    <StyledNav>
      <NavLink to="/">
        <StyledLogo
          src="https://www.sats.no/Images/SATS/logo2-no.svg?version=5"
          alt="Sats logo"
          height="33px"
        />
      </NavLink>
      <StyledNavUl>
        {navItems.map((navItem) => (
          <StyledNavLi key={navItem.name}>
            <NavLink to={navItem.to} className={activeLink}>
              {navItem.name}
            </NavLink>
          </StyledNavLi>
        ))}
      </StyledNavUl>
    </StyledNav>
  )
}
