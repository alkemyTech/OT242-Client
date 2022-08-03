import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
// import Registration from './UI/registration/UIRegistration'; Module not found: Can't resolve './alerts/ErrorAlertAuth'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// public
import NewsPage from "./pages/NewsPage/NewsPage";
import NewsDetail from './pages/NewsPage/NewsDetails/NewsDetail';
import AboutUsPage from "./pages/AboutUsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from './UI/UIHome.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// BackOffice
import BackOffice from './components/BackOffice/BackOffice';
import BackOfficeUsers from './components/BackOffice/BackOfficeUsers/BackOfficeUsers';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            // public routes
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/news/:id" element={<NewsDetail/>} />

            // BackOffice
            <Route path="/backoffice" element={<BackOffice />} />
            <Route path="/backoffice/users" element={<BackOfficeUsers />} />

          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
