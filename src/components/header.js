import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Nav from "./Nav"

const HeaderContainer = styled.header`
  background: var(--color-blue);
  padding: 1rem;
  div {
    max-width: 120rem;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  h1 {
    color: var(--color-light);
    text-align: center;
  }
`

const EnlaceHome = styled(Link)`
  color: var(--color-light);
  text-decoration: none;
`

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <EnlaceHome to="/">
          <h1>HotelGatsby</h1>
        </EnlaceHome>

        <Nav />
      </div>
    </HeaderContainer>
  )
}

export default Header
