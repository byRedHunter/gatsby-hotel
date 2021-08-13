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

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <h1>HotelGatsby</h1>

        <Nav />
      </div>
    </HeaderContainer>
  )
}

export default Header
