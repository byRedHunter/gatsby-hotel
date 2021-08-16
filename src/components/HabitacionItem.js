import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem 0;
  background-color: rgba(44, 62, 80, 85);
  width: 100%;
  color: var(--color-light);
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  border-radius: 0.5rem;
`

const ArticleHabitacion = styled.article`
  border: 0.1rem solid var(--color-blue);
  border-radius: 0.5rem;
  overflow: hidden;

  .contenido {
    padding: 3rem 2rem;
  }

  h3 {
    font-size: 2rem;
  }
`

const HabitacionItem = ({ habitacion }) => {
  const { titulo, contenido, imagen, slug } = habitacion

  return (
    <ArticleHabitacion>
      <Image fluid={imagen.fluid} alt={titulo} />

      <div className="contenido">
        <h3> {titulo} </h3>
        <p> {contenido} </p>
        <Boton to={slug}>Ver más</Boton>
      </div>
    </ArticleHabitacion>
  )
}

export default HabitacionItem
