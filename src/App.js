import React from 'react';
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
import UIActivityDetails from "./UI/activities/UIActivityDetails";

import Home from './UI/UIHome.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackNewsPage from './pages/BackOffice/news/Page/backofficeNews';


// BackOffice
import BackOfficeUsers from './Components/BackOffice/BackOfficeUsers/BackOfficeUsers';
import Login from './UI/login/LoginPage'
import Register from './UI/registration/UIRegistration'
import BackOffice from './pages/BackOffice/BackOffice';
import BackOfficeUsers from './components/BackOffice/BackOfficeUsers/BackOfficeUsers';
import ContactsTable from './components/BackOffice/ContactsTable/ContactsTable';
import ActList from './components/actTable/actList';
import ActForm from './components/actTable/actForm';
import NewsFormPage from './pages/NewsPage/NewsFormPage';
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
            <Route path="/Actividades/:id" element={<UIActivityDetails />} />
            
            // BackOffice
            <Route path="/backoffice/news" element={<BackNewsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/news/:id" element={<NewsDetail/>} />

            // BackOffice
            <Route path="/backoffice" element={<BackOffice />} />
            <Route path="/backoffice/users" element={<BackOfficeUsers />} />
            <Route path="/backoffice/contacts" element={<ContactsTable />} />

            <Route path="/login" element={<Login />} />
            <Route path="/registrate" element={<Register />} />
            <Route path="/backoffice/activities" element={<ActList />} />
            <Route path="/backoffice/activities/edit/:id" element={<ActForm />} />

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

