import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo';
import Force from './components/Force';
import Technologies from './components/Technologies';
import Presentation from './components/Presentation';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import ContactUs from './components/ConntactUs';
import Footer from './components/Footer';
import { GlobalProvider } from './GlobalProvider';




function App() {
  return (
    <>
      <Navbar />
      <Jumbo />
      <Force />
      <Presentation />
      <Technologies />
      <Experiences />
      <Projects />
      <ContactUs />
      <Footer />
    </>

  );
}

export default App;
