import React from 'react';
import './App.css';
import Home from './UI/UIHome.js';
import Registration from './UI/UIRegistration';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <div><Home /></div>
        <Footer />
    </div>
  );
}

export default App;