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
import Contact from './components/Conntact';
import { GlobalProvider } from './GlobalProvider';



function App() {
  return (
    <GlobalProvider>
      <div>
        <Navbar />
        <Jumbo /> 
        <Force/>
        <Presentation/>
        <Technologies/>
        <Experiences/>
        <Projects/>
        <Contact/>
      </div>
    </GlobalProvider>
  );
}

export default App;
