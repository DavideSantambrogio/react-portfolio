import React from 'react';
import { useGlobalContext } from '../GlobalProvider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsCard from '../components/ProjectsCard';

function ProjectsPage() {
    const { githubRepos } = useGlobalContext();

    // Array di ID dei progetti che non vuoi mostrare
    const projectIdsToNotShow = ['DavideSantambrogio'];

    // Filtra gli elementi di githubRepos basandoti sugli ID
    const filteredRepos = githubRepos.filter(repo => !projectIdsToNotShow.includes(repo.name));

    // Ordina l'array filteredRepos in modo decrescente in base all'ID
    const sortedRepos = [...filteredRepos].sort((a, b) => b.id - a.id);

    return (
        <>
            <Navbar />
            <div className=" my-container">
                <div className="container pb-5 pt-5">
                    <h4 className='my-text-color pb-5'>ALCUNI DEI MIEI PROGETTI</h4>
                    <div className="row mb-4 ">
                        {sortedRepos.map(repo => (
                            <div className="col-4 mb-4" key={repo.name}>
                                <ProjectsCard
                                    name={repo.name}
                                    htmlUrl={repo.html_url}
                                    languages={repo.languages || []}
                                    image={`./src/assets/img/projectImg/${repo.name}.png`}
                                    description={repo.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProjectsPage;
