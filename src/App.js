import React from 'react';
import Header from './components/header/Header';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <div class="parallax">
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
      <Scrollup />
    </>
  )
}

export default App;