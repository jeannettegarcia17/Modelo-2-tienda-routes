import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Button, invertThem, theme } from "../estilo-componentes/theme";


  export const Home = () => {
    return(
      <ThemeProvider theme={theme}>
    <>
    <h2 className="bienv">Bienvenido</h2>
    <p className="tienda">Somos una tienda de celulares online</p>
    <ThemeProvider theme={invertThem}>
    <Link  to="/search-page"> <Button>Ver más</Button></Link>
    </ThemeProvider>
    </>
    </ThemeProvider>
  )}

export default Home;