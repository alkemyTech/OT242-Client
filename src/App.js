import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
// import Registration from './UI/registration/UIRegistration'; Module not found: Can't resolve './alerts/ErrorAlertAuth'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from './UI/UIHome.js';
import UIActivityDetails from "./UI/activities/UIActivityDetails";

// public
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// BackOffice


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Actividades/:id" element={<UIActivityDetails />} />
            <Route path="*" element={<Navigate replace to="/" />} />

            // BackOffice


          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

