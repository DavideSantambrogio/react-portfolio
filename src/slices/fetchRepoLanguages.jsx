import axios from 'axios';
import { GITHUB_TOKEN } from '../config';

const fetchRepoLanguages = async (repos, setGithubRepos) => {
  const languagesPromises = repos.map(repo =>
    axios.get(`https://api.github.com/repos/DavideSantambrogio/${repo.name}/languages`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
  );

  const languagesResponses = await Promise.all(languagesPromises);

  const reposWithLanguages = repos.map((repo, index) => ({
    ...repo,
    languages: Object.keys(languagesResponses[index].data)
  }));

  setGithubRepos(reposWithLanguages);
};

export default fetchRepoLanguages;
