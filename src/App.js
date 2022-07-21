import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Registration from './UI/registration/UIRegistration';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from './components/Nav';
import AboutUsPage from "./pages/AboutUsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Home from './UI/UIHome.js';
import NewPage from './pages/NewsPage/NewPage';

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
          <Route path="/news" element={<NewPage />} />
          <Route path="/news/:id" element={<NewPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;