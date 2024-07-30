import './App.css';
import Hero from './Hero';
import React from 'react';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Footer from './Footer';


function App() {
  return (
    
    <div className='container'>

<Hero />

        <About />
        <Skills />
        <Portfolio />
        <Footer /> 
    </div>
  );
}

export default App;
