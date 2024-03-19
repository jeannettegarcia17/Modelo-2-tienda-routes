import React from "react";
import { Link } from "react-router-dom";
import { BtnLink } from "../estilo-componentes/styles-comp";

const SearchPage = () => {
    const celulares = [
     'Samsung',
     'LG',
     'Xiaomi',
     'iphone'
    ];
 
    return(
     <div>
       <h2>Pagina de busqueda</h2>
       {celulares.map(celular => (
           <li key={celular}>
             <Link to={`/celulares/${celular}`}><BtnLink>{celular}</BtnLink></Link>
           </li>
       ))}
     </div>
    );
 };

 export default SearchPage;