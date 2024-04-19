import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { GITHUB_TOKEN } from './config';

// Creiamo il contesto per lo store globale
const GlobalContext = createContext();

// Questa è la funzione che useremo per accedere allo store in ogni componente che ne ha bisogno
export const useGlobalContext = () => useContext(GlobalContext);

// Questo è il componente provider che avvolgerà l'app e fornirà lo store a tutti i suoi componenti figli
export const GlobalProvider = ({ children }) => {
  const [technologies, setTechnologies] = useState([
    {
      name: 'HTML',
      image: 'html-image.png'
    },
    {
      name: 'CSS',
      image: 'css-image.png'
    },
    {
      name: 'SASS',
      image: 'sass-image.png'
    },
    {
      name: 'Bootstrap',
      image: 'bootstrap-image.png'
    },
    {
      name: 'JavaScript',
      image: 'javascript-image.png'
    },
    {
      name: 'Vue.js',
      image: 'vuejs-image.png'
    },
    {
      name: 'Vite',
      image: 'vite-image.png'
    },
    {
      name: 'PHP',
      image: 'php-image.png'
    },
    {
      name: 'MySQL',
      image: 'mysql-image.png'
    },
    {
      name: 'Laravel',
      image: 'laravel-image.png'
    },
    {
      name: 'React',
      image: 'react-image.png'
    }
  ]);


  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch GitHub repositories
    axios.get('https://api.github.com/users/DavideSantambrogio/repos', {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
      .then(response => {
        // Store the complete repository information
        setGithubRepos(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Errore nella chiamata API.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const fetchLanguages = async () => {
      const languagesPromises = githubRepos.map(repo =>
        axios.get(`https://api.github.com/repos/DavideSantambrogio/${repo.name}/languages`, {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`
          }
        })
      );

      const languagesResponses = await Promise.all(languagesPromises);

      const reposWithLanguages = githubRepos.map((repo, index) => ({
        ...repo,
        languages: Object.keys(languagesResponses[index].data)
      }));

      // Aggiorna lo stato locale dei repository con i linguaggi
      setGithubRepos(reposWithLanguages);
    };

    if (githubRepos.length > 0) {
      fetchLanguages();
    }
  }, [githubRepos]);

 
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <GlobalContext.Provider value={{ technologies, githubRepos }}>
      {children}
    </GlobalContext.Provider>
  );
};