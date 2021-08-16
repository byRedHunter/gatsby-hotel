import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const ContentInicio = styled.section`
  padding: 6rem 0;
  h2 {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 4rem;
  }
  .content {
    display: grid;
    gap: 4rem;
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
  }
  p {
    line-height: 2;
  }
  @media screen and (min-width: 800px) {
    .content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

const Inicio = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  // console.log(informacion.allDatoCmsPagina.nodes[0])

  const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]

  return (
    <ContentInicio>
      <h2> {titulo} </h2>

      <div className="content">
        <p> {contenido} </p>
        <Image fluid={imagen.fluid} alt={titulo} />
      </div>
    </ContentInicio>
  )
}

export default Inicio
