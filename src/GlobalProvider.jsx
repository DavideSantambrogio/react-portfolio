import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Creiamo il contesto per lo store globale
const GlobalContext = createContext();

// Questa è la funzione che useremo per accedere allo store in ogni componente che ne ha bisogno
export const useGlobalContext = () => useContext(GlobalContext);

// Questo è il componente provider che avvolgerà l'app e fornirà lo store a tutti i suoi componenti figli
export const GlobalProvider = ({ children }) => {
  const [technologies, setTechnologies] = useState([
    'HTML',
    'CSS',
    'SASS',
    'Bootstrap',
    'JavaScript',
    'Vue.js',
    'Vite',
    'PHP',
    'MySQL',
    'Laravel',
    'React'
  ]);

  const [githubRepos, setGithubRepos] = useState([]);

  useEffect(() => {
    // Effettua la chiamata API solo una volta quando il componente viene montato
    axios.get('https://api.github.com/users/DavideSantambrogio/repos')
      .then(response => {
        // Estraiamo i dati necessari dalla risposta e li salviamo nello stato
        setGithubRepos(response.data.map(repo => repo.name));
      })
      .catch(error => {
        console.error('Errore nella chiamata API:', error);
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ technologies, githubRepos }}>
      {children}
    </GlobalContext.Provider>
  );
};
