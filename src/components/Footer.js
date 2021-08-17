import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Nav from "./Nav"

const FooterContainer = styled.footer`
  background: var(--color-dark);
  padding: 4rem 0;
  color: var(--color-light);
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

const FooterInfo = styled.p`
  text-align: center;
  padding: 0.5rem 5%;
  font-size: 1.4rem;
`

const Footer = ({ title }) => {
  const year = new Date().getFullYear()

  return (
    <>
      <FooterContainer>
        <div>
          <Nav />

          <EnlaceHome to="/">
            <h1>HotelGatsby</h1>
          </EnlaceHome>
        </div>
      </FooterContainer>

      <FooterInfo>
        {title} || Todos los derechos reservados {year} &copy;
      </FooterInfo>
    </>
  )
}

export default Footer
