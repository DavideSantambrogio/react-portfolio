import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo';
import Force from './components/Force';
import { GlobalProvider } from './GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <div>
        <Navbar />
        <Jumbo /> 
        <Force/>
      </div>
    </GlobalProvider>
  );
}

export default App;
