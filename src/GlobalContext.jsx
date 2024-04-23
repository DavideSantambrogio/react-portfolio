import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import fetchGitHubRepos from './slices/fetchGitHubRepos';
import fetchRepoLanguages from './slices/fetchRepoLanguages';
import TechnologiesData from './slices/TechnologiesData';
import fetchLinkedInEducation from './slices/fetchLinkedInEducation';
import fetchLinkedInPositions from './slices/fetchLinkedInPositions';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [technologies] = useState(TechnologiesData);
  const [githubRepos, setGithubRepos] = useState([]);
  const [positions, setPositions] = useState([]);
  const [education, setEducation] = useState([]);
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

  useEffect(() => {
    fetchLinkedInPositions(setPositions, setLoading, setError);
  }, []);

  useEffect(() => {
    fetchLinkedInEducation(setEducation, setLoading, setError);
  }, []);

  return (
    <GlobalContext.Provider value={{ technologies, githubRepos, positions, education, loading, error }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
