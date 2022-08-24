import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from './components/ProtectedRoutes/PrivateRoute';
import LoggedRoute from './components/ProtectedRoutes/LoggedRoute';
import NotLoggedRoute from './components/ProtectedRoutes/NotLoggedRoute';

// public
import Header from './components/header/Header';
import HomePage from './pages/public/homePage/HomePage';
import NewsPage from "./pages/public/newsPage/NewsPage";
import NewsDetail from './pages/public/newsPage/NewsDetails/NewsDetail';
import AboutUsPage from "./pages/public/aboutUsPage/AboutUsPage";
import ActivitiesPage from "./pages/public/activitiesPage/ActivitiesPage";
import ActivityDetails from './pages/public/activitiesPage/ActivitiesDetail/ActivityDetailsPage';
import TestimonialsPage from './pages/public/testimonialsPage/TestimonialsPage';
import ContactPage from "./pages/public/contactPage/ContactPage";
import Login from './pages/public/formsPage/LoginPage';
import Register from './pages/public/formsPage/RegistrationPage';
import Footer from './components/footer/Footer';

// BackOffice
import BackOffice from './pages/backOffice/BackOffice';
import ContactsTable from './components/BackOffice/ContactsTable/ContactsTable';
import ActList from './components/actTable/actList';
import NewsFormPage from './pages/backOffice/newsPage/NewsFormPage';
import BackNewsPage from './pages/backOffice/newsPage/backofficeNews';
import ActivitiesFormPage from './pages/backOffice/activitiesPage/ActivitiesFormPage';
import MembersList from './components/membersTable/MembersList';
import MembersFormPage from './pages/backOffice/membersPage/MembersFormPage';
import CategoriesList from './components/categoriesTable/CategoryList';
import CategoriesFormPage from './pages/backOffice/categoriesPage/CategoriesFormPage';
import TestimonialsList from './components/testimonialsTable/TestimonyList';
import TestimonialsFormPage from './pages/backOffice/testimonialsPage/TestimonialsFormPage';
import UsersList from './components/usersTable/UserList';
import UsersFormPage from './pages/backOffice/usersPage/UsersFormPage';
import UserInfo from './components/UserInfo/UserInfo';
import ActivitiesDetailsPage from './pages/public/activitiesPage/ActivitiesDetail/ActivityDetailsPage';
import UserSetPage from './pages/public/aboutUsPage/userPage/UserSetPage';

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
            <Route path="/activities/:id" element={<ActivitiesDetailsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetail/>} />

            {/* BackOffice */}
            <Route path="/backoffice/news" element={<PrivateRoute><BackNewsPage /></PrivateRoute>} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/backoffice" element={<PrivateRoute><BackOffice /></PrivateRoute>} />
            <Route path="/backoffice/contacts" element={<PrivateRoute><ContactsTable /></PrivateRoute>} />
            <Route path="/backoffice/activities" element={<PrivateRoute><ActList /></PrivateRoute>} />
            <Route path="/backoffice/activitiesform/" element={<PrivateRoute><ActivitiesFormPage /></PrivateRoute>} />
            <Route path="/backoffice/activitiesform/:id" element={<PrivateRoute><ActivitiesFormPage /></PrivateRoute>} />
            <Route path="/backoffice/members" element={<PrivateRoute><MembersList /></PrivateRoute>} />
            <Route path="/backoffice/membersform/" element={<PrivateRoute><MembersFormPage /></PrivateRoute>} />
            <Route path="/backoffice/membersform/:id" element={<PrivateRoute><MembersFormPage /></PrivateRoute>} />
            <Route path="/backoffice/categories" element={<PrivateRoute><CategoriesList /></PrivateRoute>} />
            <Route path="/backoffice/categoriesform/" element={<PrivateRoute><CategoriesFormPage /></PrivateRoute>} />
            <Route path="/backoffice/categoriesform/:id" element={<PrivateRoute><CategoriesFormPage /></PrivateRoute>} />
            <Route path="/backoffice/testimonials" element={<PrivateRoute><TestimonialsList /></PrivateRoute>} />
            <Route path="/backoffice/testimonialsform/" element={<NotLoggedRoute><TestimonialsFormPage /></NotLoggedRoute>} />
            <Route path="/backoffice/testimonialsform/:id" element={<PrivateRoute><TestimonialsFormPage /></PrivateRoute>} />
            <Route path="/backoffice/users" element={<PrivateRoute><UsersList /></PrivateRoute>} />
            <Route path="/backoffice/usersform/:id" element={<PrivateRoute><UsersFormPage /></PrivateRoute>} />
            <Route path="/newsForm/:id" element={<PrivateRoute><NewsFormPage /></PrivateRoute>} />
            <Route path="/newsForm/" element={<PrivateRoute><NewsFormPage /></PrivateRoute>} />

            {/* Users */}
            <Route path="/login" element={<LoggedRoute><Login /></LoggedRoute>} />
            <Route path="/registrate" element={<LoggedRoute><Register /></LoggedRoute>} />
            <Route path="/profile/" element={<NotLoggedRoute><UserInfo /></NotLoggedRoute>} />
            <Route path="/userset/:id" element={<NotLoggedRoute><UserSetPage /></NotLoggedRoute>} />

          </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;

