import React from 'react';
import './App.css';
// import Registration from './UI/registration/UIRegistration'; Module not found: Can't resolve './alerts/ErrorAlertAuth'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewsPage from "./pages/NewsPage/NewsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from './UI/UIHome.js';
import UIActivityDetails from "./UI/activities/UIActivityDetails";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackNewsPage from './pages/BackOffice/news/Page/backofficeNews';
import DetailedNew from './pages/NewsPage/DetailedNew';


// BackOffice
import BackOffice from './pages/BackOffice/BackOffice';
import BackOfficeUsers from './components/BackOffice/BackOfficeUsers/BackOfficeUsers';

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
            
            // BackOffice
            <Route path="/backoffice/news" element={<BackNewsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/novedad/:id" element={<DetailedNew/>} />
            <Route path="/backoffice" element={<BackOffice />} />
            <Route path="/backoffice/users" element={<BackOfficeUsers />} />

          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
