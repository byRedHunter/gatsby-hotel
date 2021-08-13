import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Navegation = styled.nav`
  display: flex;
  column-gap: 2rem;
  justify-content: center;
  padding: 2rem 0;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`

const NavLink = styled(Link)`
  color: var(--color-light);
  font-weight: 700;
  line-height: 1rem;
  padding-bottom: 1rem;

  &.pagina-actual {
    border-bottom: solid #fff;
  }
`

const Nav = () => {
  return (
    <Navegation>
      <NavLink to="/" activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink to="/nosotros" activeClassName="pagina-actual">
        Nosotros
      </NavLink>
    </Navegation>
  )
}

export default Nav
