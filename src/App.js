import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
// import Registration from './UI/registration/UIRegistration'; Module not found: Can't resolve './alerts/ErrorAlertAuth'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from './UI/UIHome.js';

// public
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// BackOffice
import BackOffice from './Components/BackOffice/BackOffice';
import BackOfficeUsers from './Components/BackOffice/BackOfficeUsers/BackOfficeUsers';
import NewsFormPage from './pages/NewsPage/NewsFormPage';

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
            <Route path="*" element={<Navigate replace to="/" />} />

            // BackOffice
            <Route path="/backoffice" element={<BackOffice />} />
            <Route path="/backoffice/users" element={<BackOfficeUsers />} />

            // News creation and update
            <Route path="/newsForm/:id" element={<NewsFormPage />} />
            <Route path="/newsForm/" element={<NewsFormPage />} />

          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

