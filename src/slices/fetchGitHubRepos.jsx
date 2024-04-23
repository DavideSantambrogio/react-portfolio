import axios from 'axios';
import { GITHUB_TOKEN } from '../config';

const fetchGitHubRepos = async (setGithubRepos, setLoading, setError) => {
  try {
    const response = await axios.get('https://api.github.com/users/DavideSantambrogio/repos', {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });
    setGithubRepos(response.data);
    setLoading(false);
  } catch (error) {
    setError('Errore nella chiamata API.');
    setLoading(false);
  }
};

export default fetchGitHubRepos;
