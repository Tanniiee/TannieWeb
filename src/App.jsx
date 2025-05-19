import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
    <Navbar />
    <Hero/>
    <About/>
    <Service/>
    <Projects/>
    <Contact/>
    <Footer/>
    </main>
  );
}

export default App
