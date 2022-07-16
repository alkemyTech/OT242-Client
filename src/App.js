import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Slider from './features/carousel/Slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <Slider 
      slide1={[ //First Slide
      'https://logos.flamingtext.com/City-Logos/Ong-Logo.png', // imageUrl
      'Misión', // Title
      'Trabajar articuladamente con los distintos aspectos de la vida de las familias.']} // Description

      slide2={[ // Second Slide
      'https://blog.digitalegia.com/hubfs/dinamicas-para-impulsar-ONG-redes-sociales.png',
      'Visión',
      'Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el barrio La Cava.'
      ]}

      slide3={[ // Third Slide
      'https://i.blogs.es/7cb90c/giving_week_2018-social-tm_1_copy_1.max-1000x1000/1366_2000.jpg',
      'Nosotros',
      'Desde 1997 vecinos del barrio La Cava.'
      ]}>
      </Slider>
    </div>
  );
}

export default App;
