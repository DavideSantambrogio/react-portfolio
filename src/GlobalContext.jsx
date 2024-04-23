import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import fetchGitHubRepos from './slices/fetchGitHubRepos';
import fetchRepoLanguages from './slices/fetchRepoLanguages';
import TechnologiesData from './slices/TechnologiesData';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [technologies] = useState(TechnologiesData);
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGitHubRepos(setGithubRepos, setLoading, setError);
  }, []);

  useEffect(() => {
    if (githubRepos.length > 0) {
      fetchRepoLanguages(githubRepos, setGithubRepos);
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

export const useGlobalContext = () => React.useContext(GlobalContext);
