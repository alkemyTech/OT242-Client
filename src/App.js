import React from 'react';
// import Registration from './UI/registration/UIRegistration'; Module not found: Can't resolve './alerts/ErrorAlertAuth'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// public
import Header from './components/header/Header';
import HomePage from './pages/public/homePage/HomePage';
import NewsPage from "./pages/public/newsPage/NewsPage";
import NewsDetail from './pages/public/newsPage/NewsDetails/NewsDetail';
import AboutUsPage from "./pages/public/aboutUsPage/AboutUsPage";
import ActivitiesPage from "./pages/public/activitiesPage/ActivitiesPage";
import ActivitiesDetails from './pages/public/activitiesPage/ActivitiesDetail/ActivityDetails';
import ActivityDetails from './components/activityDetails/ActivityDetails';
import TestimonialsPage from './pages/public/testimonialsPage/TestimonialsPage';
import ContactPage from "./pages/public/contactPage/ContactPage";
import Footer from './components/footer/Footer';

// BackOffice
import BackOfficeUsers from './pages/backOffice/BackOfficeUsers/BackOfficeUsers';
import Login from './pages/public/loginPage/LoginPage'
import Register from './pages/public/registrationPage/RegistrationPage'
import BackOffice from './pages/backOffice/BackOffice';
import ContactsTable from './components/backOffice/ContactsTable/ContactsTable';
import ActList from './components/actTable/actList';
import ActForm from './components/actTable/actForm';
import NewsFormPage from './pages/backOffice/newsPage/NewsFormPage';
import BackNewsPage from './pages/backOffice/newsPage/backofficeNews';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            {/* public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/actividades" element={<ActivitiesPage />} />
            <Route path="/actividades/:id" element={<ActivityDetails />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/login" element={<Login />} />
            <Route path="/registrate" element={<Register />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetail/>} />

            {/* BackOffice */}
            <Route path="/backoffice/news" element={<BackNewsPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/backoffice" element={<BackOffice />} />
            <Route path="/backoffice/users" element={<BackOfficeUsers />} />
            <Route path="/backoffice/contacts" element={<ContactsTable />} />
            <Route path="/backoffice/activities" element={<ActList />} />
            <Route path="/backoffice/activities/edit/:id" element={<ActForm />} />

            {/* News creation and update */}
            <Route path="/newsForm/:id" element={<NewsFormPage />} />
            <Route path="/newsForm/" element={<NewsFormPage />} />

          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

