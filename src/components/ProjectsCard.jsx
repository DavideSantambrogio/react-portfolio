import React from 'react';

function ProjectsCard({ name, htmlUrl, languages, image, description }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          HTML URL: <a href={htmlUrl} target="_blank" rel="noopener noreferrer">{htmlUrl}</a>
        </p>
        <p className="card-text">
          Languages: {languages.join(', ')}
        </p>
      </div>
    </div>
  );
}

export default ProjectsCard;
