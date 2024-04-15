import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo';
import Force from './components/Force';
import Technologies from './components/Technologies';
import { GlobalProvider } from './GlobalProvider';


function App() {
  return (
    <GlobalProvider>
      <div>
        <Navbar />
        <Jumbo /> 
        <Force/>
        <Technologies/>
      </div>
    </GlobalProvider>
  );
}

export default App;
