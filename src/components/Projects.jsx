import React from 'react';
import { useGlobalContext } from '../GlobalProvider';
import ProjectsCard from './ProjectsCard';

function Projects() {
  const { githubRepos, projectInfo } = useGlobalContext();

  // Array di ID dei progetti che vuoi mostrare
  const projectIdsToShow = ['react-portfolio', 'Devvery-front-office', 'Devvery-back-office', 'js-biglietto-treno-form', 'php-badwords', 'vue-boolzapp' ];

  // Filtra gli elementi di githubRepos basandoti sugli ID
  const filteredRepos = githubRepos.filter(repo => projectIdsToShow.includes(repo.name));

  // Ordina l'array filteredRepos in modo decrescente in base all'ID
  const sortedRepos = [...filteredRepos].sort((a, b) => b.id - a.id);

  return (
    <div className="my-bg-secondary">
      <div className="container pb-5 pt-5">
        <h4 className='my-text-color pb-5'>ALCUNI DEI MIEI PROGETTI</h4>
        <div className="row mb-4">
          {sortedRepos.map(repo => (
            <div className="col-4 mb-4" key={repo.name}>
              <ProjectsCard
                name={repo.name}
                htmlUrl={repo.html_url}
                languages={repo.languages || []} 
                image={projectInfo[repo.name]?.image || '/path/to/default-image.png'}
                description={`Descrizione per ${repo.name}`}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
            <div className="btn btn-secondary">Mostra tutti</div>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
