import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

const About = styled.section`
  padding: 6rem 0;
  h2 {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 4rem;
  }
  p {
    line-height: 2;
  }
  .contenido {
    display: grid;
    gap: 4rem;
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
  }
`

const NosotrosContent = () => {
  const resultado = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0]

  return (
    <About>
      <h2> {titulo} </h2>

      <div className="contenido">
        <p> {contenido} </p>
        <Image fluid={imagen.fluid} />
      </div>
    </About>
  )
}

export default NosotrosContent
