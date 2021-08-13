import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const ImageBackground = styled(BackgroundImage)`
  height: 500px;
`

const ImageContent = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 85, 92, 0.8),
    rgba(34, 85, 145, 0.8)
  );
  color: var(--color-light);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0%;
  }
  p {
    font-size: 2rem;
  }
  @media screen and (min-width: 992px) {
    h1 {
      font-size: 6rem;
    }
    p {
      font-size: 3rem;
    }
  }
`

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <ImageContent>
        <h1>Bienvenido a HotelGatsby</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </ImageContent>
    </ImageBackground>
  )
}

export default ImagenHotel
