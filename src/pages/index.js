import * as React from "react"
import styled from "styled-components"
import HabitacionItem from "../components/HabitacionItem"
import ImagenHotel from "../components/ImagenHotel"
import Inicio from "../components/Inicio"
import Layout from "../components/Layout"
import useHabitacion from "../hooks/useHabitacion"

const Titulo = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
`

const HabitacionesList = styled.section`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 4rem;
`

const IndexPage = () => {
  const habitaciones = useHabitacion()

  return (
    <Layout>
      <ImagenHotel />

      <Inicio />

      <Titulo>Nuestras Habitaciones</Titulo>

      <HabitacionesList>
        {habitaciones.map(habitacion => (
          <HabitacionItem key={habitacion.id} habitacion={habitacion} />
        ))}
      </HabitacionesList>
    </Layout>
  )
}

export default IndexPage
