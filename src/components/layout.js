import React from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  :root {
    --color-dark: #2C2E43;
    --color-light: #e9e9e9;
    --color-blue: rgb(34, 85, 140);
    --font-size: 1.6rem;
    --font-body: 'PT Sans', sans-serif;;
    --font-title: 'Roboto', sans-serif;;
  }
  body {
    background: var(--color-light);
    color: var(---color-dark);
    font-size: var(---font-size);
    line-height: 1.5;
    font-family: var(---font-body);
  }
  h1, h2, h3 {
    margin: 0;
    line-height: 1.5;
  }
  h1, h2, .title {
    font-family: var(---font-title);
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Gatsby Hotel</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <GlobalStyle />

      <Header />
      {children}
    </>
  )
}

export default Layout
