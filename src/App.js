import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Registration from './UI/registration/UIRegistration';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from './Components/Nav';
import AboutUsPage from "./pages/AboutUsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from './UI/UIHome.js';
import DetailedNew from './pages/Novedades/DetailedNew';

function App() {
  return (

    <div className="App">
     <BrowserRouter>
    <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/Activities" element={<ActivitiesPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/novedad/:id" element={<DetailedNew/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;