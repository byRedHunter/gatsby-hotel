import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "./Layout"
import Image from "gatsby-image"

export const info = graphql`
  query ($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
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
`

const HabitacionInfo = styled.main`
  padding: 6rem 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  p {
    line-height: 2;
    margin-bottom: 4rem;
  }
`

const Titulo = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
`

const Habitacion = ({ data }) => {
  const { titulo, contenido, imagen } = data.allDatoCmsHabitacion.nodes[0]

  return (
    <Layout>
      <HabitacionInfo>
        <Titulo> {titulo} </Titulo>
        <p> {contenido} </p>
        <Image fluid={imagen.fluid} alt={titulo} />
      </HabitacionInfo>
    </Layout>
  )
}

export default Habitacion
