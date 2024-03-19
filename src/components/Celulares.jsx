import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Button, theme } from "../estilo-componentes/theme";


const Celulares = ({nameCelular}) => {
  
     return (
       <ThemeProvider theme={theme}>
         <div>
       
       <h2>Info de Celulares</h2>
       <h3>{nameCelular}</h3>
       <Link to='details'><Button>Ver detalle</Button> </Link>
       <Outlet/>
       
     </div>
       </ThemeProvider>
     );
  };

  
  export default Celulares;