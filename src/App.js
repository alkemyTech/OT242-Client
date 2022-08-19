import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from './components/ProtectedRoutes/PrivateRoute';
import LoggedRoute from './components/ProtectedRoutes/LoggedRoute';

// public
import Header from './components/header/Header';
import HomePage from './pages/public/homePage/HomePage';
import NewsPage from "./pages/public/newsPage/NewsPage";
import NewsDetail from './pages/public/newsPage/NewsDetails/NewsDetail';
import AboutUsPage from "./pages/public/aboutUsPage/AboutUsPage";
import ActivitiesPage from "./pages/public/activitiesPage/ActivitiesPage";
import ActivityDetails from './pages/public/activitiesPage/ActivitiesDetail/ActivityDetails';
import TestimonialsPage from './pages/public/testimonialsPage/TestimonialsPage';
import ContactPage from "./pages/public/contactPage/ContactPage";
import Login from './pages/public/formsPage/LoginPage';
import Register from './pages/public/formsPage/RegistrationPage';
import Footer from './components/footer/Footer';

// BackOffice
import BackOfficeUsers from './pages/backOffice/BackOfficeUsers/BackOfficeUsers';
import BackOffice from './pages/backOffice/BackOffice';
import ContactsTable from './components/BackOffice/ContactsTable/ContactsTable';
import ActList from './components/actTable/actList';
import ActivitiesForm from './components/forms/ActivitiesForm/ActivitiesForm';
import NewsFormPage from './pages/backOffice/newsPage/NewsFormPage';
import BackNewsPage from './pages/backOffice/newsPage/backofficeNews';
import BackTestimonialPage from './pages/backOffice/testimonial/BackOfficeTestimonials';
import ActivitiesFormPage from './pages/backOffice/activitiesPage/ActivitiesFormPage';
import MembersList from './components/membersTable/MembersList';
import MembersFormPage from './pages/backOffice/membersPage/MembersFormPage';

function App() {
  return (
    <div className="App general">
      <BrowserRouter>
        <Header />
          <Routes>

            {/* public routes */}
   
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />

            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/actividades/:id" element={<ActivityDetails />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetail/>} />

            {/* BackOffice */}
            <Route path="/backoffice/news" element={<PrivateRoute><BackNewsPage /></PrivateRoute>} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/backoffice" element={<PrivateRoute><BackOffice /></PrivateRoute>} />
            <Route path="/backoffice/users" element={<PrivateRoute><BackOfficeUsers /></PrivateRoute>} />
            <Route path="/backoffice/contacts" element={<PrivateRoute><ContactsTable /></PrivateRoute>} />
            <Route path="/backoffice/activities" element={<PrivateRoute><ActList /></PrivateRoute>} />
            <Route path="/backoffice/activitiesform/" element={<PrivateRoute><ActivitiesFormPage /></PrivateRoute>} />
            <Route path="/backoffice/activitiesform/:id" element={<PrivateRoute><ActivitiesFormPage /></PrivateRoute>} />
            <Route path="/backoffice/members" element={<PrivateRoute><MembersList /></PrivateRoute>} />
            <Route path="/backoffice/membersform/" element={<PrivateRoute><MembersFormPage /></PrivateRoute>} />
            <Route path="/backoffice/membersform/:id" element={<PrivateRoute><MembersFormPage /></PrivateRoute>} />
            <Route path="/backoffice/testimonials" element={<PrivateRoute><BackTestimonialPage /></PrivateRoute>} />
            <Route path="/newsForm/:id" element={<PrivateRoute><NewsFormPage /></PrivateRoute>} />
            <Route path="/newsForm/" element={<PrivateRoute><NewsFormPage /></PrivateRoute>} />

            {/* Users */}
            <Route path="/login" element={<LoggedRoute><Login /></LoggedRoute>} />
            <Route path="/registrate" element={<LoggedRoute><Register /></LoggedRoute>} />

          </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

