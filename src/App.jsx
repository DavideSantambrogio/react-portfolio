import React from 'react';
import { Provider } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo';

function App() {
  return (

      <div>
        <Navbar />
        <Jumbo />
      </div>

  );
}

export default App;
