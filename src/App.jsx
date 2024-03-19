import React from 'react';
import './App.css';
import { Routes, Route, Link, useParams, Outlet, NavLink as NL, NavLink } from 'react-router-dom';
import { BtnLink, DetailsCont, Header } from './estilo-componentes/styles-comp';
import {  Button, invertThem, theme } from './estilo-componentes/theme';
import { ThemeProvider } from 'styled-components';
import dataCelu from "./data/dataCelu"
import Home from './components/HOME';
import SearchPage from './components/SearchPage';
import Celulares from './components/Celulares';
import CelularesDetails from './components/CelularDetails';
import NvLink from './components/NavLink';

//Aqui estaba Home

//Aqui iba dataCelu

//Aqui estaba SearchPage

// Aqui estaba Celulares

//Aqui estaba CelularDetails



 function App () {
  return (
    <div>
       <Header>
       <img src="./img/logo.jpg" alt=""></img>
       <nav>
        <ul>
          <li><NavLink to = "/">Home</NavLink></li>

          <li><NavLink to = "/search-page">Pagina de busqueda</NavLink></li>
        </ul>
       </nav>
  </Header>

  <Routes>
    <Route path='/' element = { < Home /> } />
    <Route path='/search-page' element = { <SearchPage />} />

    <Route path='/celulares/:nameCelular' element={<Celulares/>}>
  <Route path='details' element={<CelularesDetails />} />
</Route>
</Routes>
    </div>
  );
};

export default App

