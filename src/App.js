// Archivos
import Header from './components/Header/Header';
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Contribute from "./pages/Contribute/Contribute"


// Dependencias
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/novedades" element={<News />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/contribuir" element={<Contribute />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
