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

  const projectInfo = {
    'react-portfolio': {
      image: '/path/to/images/react-portfolio-image.png',
      description: 'Descrizione per react-portfolio'
    },
    'Devvery-front-office': {
      image: '/path/to/images/Devvery-front-office-image.png',
      description: 'Descrizione per Devvery-front-office'
    },
    'Devvery-back-office': {
      image: '/path/to/images/Devvery-back-office-image.png',
      description: 'Descrizione per Devvery-back-office'
    },
    'js-Gioco-dei-dadi': {
      image: '/path/to/images/js-Gioco-dei-dadi-image.png',
      description: 'Descrizione per js-Gioco-dei-dadi'
    },
    'DavideSantambrogio': {
      image: '/path/to/images/DavideSantambrogio-image.png',
      description: 'Descrizione per DavideSantambrogio'
    },
    'laravel-dc-comics': {
      image: '/path/to/images/laravel-dc-comics-image.png',
      description: 'Descrizione per laravel-dc-comics'
    },
    'php-dischi-json': {
      image: '/path/to/images/php-dischi-json-image.png',
      description: 'Descrizione per php-dischi-json'
    },
    'php-badwords': {
      image: '/path/to/images/php-badwords-image.png',
      description: 'Descrizione per php-badwords'
    },
    'proj-html-vuejs': {
      image: '/path/to/images/proj-html-vuejs-image.png',
      description: 'Descrizione per proj-html-vuejs'
    },
    'vite-boolflix': {
      image: '/path/to/images/vite-boolflix-image.png',
      description: 'Descrizione per vite-boolflix'
    },
    'vite-yu-gi-oh': {
      image: '/path/to/images/vite-yu-gi-oh-image.png',
      description: 'Descrizione per vite-yu-gi-oh'
    },
    'vite-comics': {
      image: '/path/to/images/vite-comics-image.png',
      description: 'Descrizione per vite-comics'
    },
    'vue-boolzapp': {
      image: '/path/to/images/vue-boolzapp-image.png',
      description: 'Descrizione per vue-boolzapp'
    },
    'js-campominato-dom': {
      image: '/path/to/images/js-campominato-dom-image.png',
      description: 'Descrizione per js-campominato-dom'
    },
    'js-fizzbuzz': {
      image: '/path/to/images/js-fizzbuzz-image.png',
      description: 'Descrizione per js-fizzbuzz'
    },
    'js-biglietto-treno-form': {
      image: '/path/to/images/js-biglietto-treno-form-image.png',
      description: 'Descrizione per js-biglietto-treno-form'
    },
    'htmlcss-responsive-layout': {
      image: '/path/to/images/htmlcss-responsive-layout-image.png',
      description: 'Descrizione per htmlcss-responsive-layout'
    },
    'htmlcss-dropbox': {
      image: '/path/to/images/htmlcss-dropbox-image.png',
      description: 'Descrizione per htmlcss-dropbox'
    },
    'htmlcss-discord': {
      image: '/path/to/images/htmlcss-discord-image.png',
      description: 'Descrizione per htmlcss-discord'
    },
    'Coding-Challenge': {
      image: '/path/to/images/Coding-Challenge-image.png',
      description: 'Descrizione per Coding-Challenge'
    }
  };
  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <GlobalContext.Provider value={{ technologies, githubRepos, projectInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};